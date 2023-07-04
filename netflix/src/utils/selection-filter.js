export default function selectionFilter({ portfolio, films } = []) {
  return {
    portfolio: [
      { title: 'Project', data: portfolio?.filter((item) => item.genre === 'project') },
      { title: 'Education & Career', data: portfolio?.filter((item) => item.genre === 'education') },
      { title: 'Certifications', data: portfolio?.filter((item) => item.genre === 'certifications') },
    ],
    skills: [
      { title: 'Language', data: films?.filter((item) => item.genre === 'language') },
      { title: 'Framework', data: films?.filter((item) => item.genre === 'framework') },
      { title: 'Cloud/Infra', data: films?.filter((item) => item.genre === 'cloud') },
      { title: 'DevOps', data: films?.filter((item) => item.genre === 'devops') },
    ],
  };
}
