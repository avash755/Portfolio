const CONTRIBUTIONS_API = 'https://github-contributions-api.jogruber.de/v4';
const GITHUB_API = 'https://api.github.com';
const GITHUB_HEADERS = { Accept: 'application/vnd.github+json' };

async function fetchGitHubJson(url, signal) {
  const response = await fetch(url, { headers: GITHUB_HEADERS, signal });
  if (!response.ok) {
    throw new Error(`GitHub request failed (${response.status}).`);
  }
  return response.json();
}

export async function getGithubContributions(username, signal) {
  const payload = await fetchGitHubJson(`${CONTRIBUTIONS_API}/${encodeURIComponent(username)}?y=last`, signal);
  const total = Number(payload?.total?.lastYear);
  if (!Number.isFinite(total) || !Array.isArray(payload?.contributions)) {
    throw new Error('GitHub contributions response was incomplete.');
  }

  return { total, contributions: payload.contributions };
}

export async function getGithubPublicStats(username, signal) {
  const safeUsername = encodeURIComponent(username);
  const profile = await fetchGitHubJson(`${GITHUB_API}/users/${safeUsername}`, signal);
  const repositories = Number(profile?.public_repos);
  if (!Number.isFinite(repositories)) {
    throw new Error('GitHub profile response was incomplete.');
  }

  let stars = 0;
  for (let page = 1; ; page += 1) {
    const ownedRepos = await fetchGitHubJson(
      `${GITHUB_API}/users/${safeUsername}/repos?type=owner&per_page=100&page=${page}`,
      signal,
    );
    if (!Array.isArray(ownedRepos)) {
      throw new Error('GitHub repository response was incomplete.');
    }

    stars += ownedRepos.reduce((total, repo) => total + Number(repo.stargazers_count || 0), 0);
    if (ownedRepos.length < 100) break;
  }

  return { repositories, stars };
}
