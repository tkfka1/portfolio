import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';

export default function Browse() {
  const { portfolio } = useContent('portfolio');
  const { films } = useContent('films');
  const slides = selectionFilter({ portfolio, films });

  return <BrowseContainer slides={slides} />;
}
