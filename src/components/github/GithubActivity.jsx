import { useEffect, useMemo, useState } from 'react';
import { Github, GitBranch, Star, Database } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { getGithubContributions, getGithubPublicStats } from '../../services/githubService';

function contributionCells(days) {
  if (!days.length) return [];

  const orderedDays = [...days].sort((first, second) => first.date.localeCompare(second.date));
  const leadingBlanks = new Date(`${orderedDays[0].date}T00:00:00Z`).getUTCDay();
  return [
    ...Array.from({ length: leadingBlanks }, (_, index) => ({ date: `empty-${index}`, empty: true, level: 0 })),
    ...orderedDays,
  ];
}

function statLabel(status, value) {
  if (status === 'loading') return '…';
  return status === 'ready' ? value.toLocaleString() : 'Unavailable';
}

export default function GithubActivity({ profile }) {
  const [activity, setActivity] = useState({ status: 'loading', total: null, contributions: [] });
  const [publicStats, setPublicStats] = useState({ status: 'loading', repositories: null, stars: null });
  const username = profile.socialLinks.github.split('/').filter(Boolean).pop();

  useEffect(() => {
    const controller = new AbortController();

    getGithubContributions(username, controller.signal)
      .then((result) => setActivity({ status: 'ready', ...result }))
      .catch(() => {
        if (!controller.signal.aborted) {
          setActivity({ status: 'error', total: null, contributions: [] });
        }
      });

    getGithubPublicStats(username, controller.signal)
      .then((result) => setPublicStats({ status: 'ready', ...result }))
      .catch(() => {
        if (!controller.signal.aborted) {
          setPublicStats({ status: 'error', repositories: null, stars: null });
        }
      });

    return () => controller.abort();
  }, [username]);

  const cells = useMemo(() => contributionCells(activity.contributions), [activity.contributions]);
  const contributionLabel = statLabel(activity.status, activity.total);
  const repositoryLabel = statLabel(publicStats.status, publicStats.repositories);
  const starLabel = statLabel(publicStats.status, publicStats.stars);

  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="06 / Open Source Velocity" title="GitHub Activity" description="Live contribution and repository data from my public GitHub profile." />
        <div className="github-layout">
          <div className="github-card">
            <div className="github-top">
              <div>
                <span className="eyebrow">CONTRIBUTIONS IN THE LAST YEAR</span>
                <strong aria-live="polite">{contributionLabel}</strong>
                <span className="github-data-note">
                  {activity.status === 'ready' ? 'Live profile data · refreshed hourly' : activity.status === 'loading' ? 'Loading from GitHub…' : 'Could not load live data'}
                </span>
              </div>
              <a href={profile.socialLinks.github} target="_blank" rel="noreferrer" aria-label="Open GitHub profile"><Github size={20} /></a>
            </div>
            <div className="contribution-grid" role="img" aria-label="GitHub contribution calendar for the last 12 months">
              {cells.map((day) => (
                <span
                  key={day.date}
                  className={day.empty ? 'contribution-cell is-empty' : 'contribution-cell'}
                  data-level={day.level ?? 0}
                  title={day.empty ? undefined : `${day.count} contributions on ${day.date}`}
                />
              ))}
            </div>
            <div className="github-legend"><span>Less</span>{[0, 1, 2, 3, 4].map((level) => <i key={level} data-level={level} />)}<span>More</span></div>
          </div>
          <div className="github-stats">
            <div><GitBranch /><strong>{repositoryLabel}</strong><span>Public repositories</span></div>
            <div><Database /><strong>{contributionLabel}</strong><span>Contributions</span></div>
            <div><Star /><strong>{starLabel}</strong><span>Stars earned</span></div>
            <div className="github-avatar-card">
              <img className="github-avatar" src="/assets/github-avatar.png" alt="GitHub profile avatar" width="460" height="460" />
              <div><strong>My GitHub</strong><a href={profile.socialLinks.github} target="_blank" rel="noreferrer">@{username}</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
