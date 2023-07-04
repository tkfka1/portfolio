import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';

export default function Browse() {
  const { portfolio } = useContent('portfolio');
  const { skills } = useContent('skills');
  const slides = selectionFilter({ portfolio, skills });

  return <BrowseContainer slides={slides} />;
}
