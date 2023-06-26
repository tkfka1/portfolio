import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  display: flex;
  flex-direction: ${({ flexdirection }) => (flexdirection === 'row' ? 'row' : 'column')};
  align-items: ${({ alignitems }) => alignitems || 'flex-start'};
  margin: ${({ margin }) => margin || '0'};
  overflow: hidden;
  position: relative;
`;

const SlideWrapper = styled.div`
  display: flex;
  width: ${({ slideWidth }) => slideWidth || '100%'};
  transform: ${({ translateX }) => `translateX(${translateX}px)`};
  transition: transform 0.5s ease;
`;

const Slider = ({ children, flexdirection, alignitems, margin }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const slideWidth = slideRef.current ? slideRef.current.clientWidth : 0;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  return (
    <SliderContainer flexdirection={flexdirection} alignitems={alignitems} margin={margin}>
      <SlideWrapper slideWidth={`${slideWidth}px`} translateX={-currentSlide * slideWidth} ref={slideRef}>
        {children}
      </SlideWrapper>
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </SliderContainer>
  );
};

export default Slider;