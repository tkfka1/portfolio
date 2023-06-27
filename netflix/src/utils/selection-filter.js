export default function selectionFilter({ portfolio, films } = []) {
  return {
    portfolio: [
      { title: 'Project', data: portfolio?.filter((item) => item.genre === 'project') },
      { title: 'Education & Career', data: portfolio?.filter((item) => item.genre === 'education') },
      { title: 'Certifications', data: portfolio?.filter((item) => item.genre === 'certifications') },
      { title: 'dsa', data: portfolio?.filter((item) => item.genre === 'dsa') },
    ],
    films: [
      { title: 'Drama', data: films?.filter((item) => item.genre === 'drama') },
      { title: 'Thriller', data: films?.filter((item) => item.genre === 'thriller') },
      { title: 'Children', data: films?.filter((item) => item.genre === 'children') },
      { title: 'Suspense', data: films?.filter((item) => item.genre === 'suspense') },
      { title: 'Romance', data: films?.filter((item) => item.genre === 'romance') },
    ],
  };
}
