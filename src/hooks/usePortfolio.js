import { fallbackJourney, fallbackProjects, fallbackProfile, fallbackSkills } from '../data/constants';

export function usePortfolio() {
  return {
    profile: fallbackProfile,
    projects: fallbackProjects,
    skills: fallbackSkills,
    journey: fallbackJourney,
    github: null,
    loading: false,
  };
}
