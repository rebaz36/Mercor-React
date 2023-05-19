import React, { useEffect } from 'react';
import propTypes from 'prop-types';

function MiniSlider({ scrollPosition, activeSlide, setActiveSlide }) {
  const calculateScrollPercentage = (scrollPosition) => {
    const rangeStart = 1250;
    // eslint-disable-next-line max-len
    const rangeEnd = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight;
    const scrollRange = rangeEnd - rangeStart;
    const positionInRange = scrollPosition - rangeStart;
    return Math.ceil((positionInRange / scrollRange) * 100);
  };

  useEffect(() => {
    // eslint-disable-next-line no-nested-ternary
    setActiveSlide(calculateScrollPercentage(scrollPosition) < 33 ? '01' : calculateScrollPercentage(scrollPosition) < 66 ? '02' : '03');
  }, [scrollPosition, setActiveSlide]);

  return (
    <div style={{
      color: '#adadad',
      width: '5vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      fontSize: '12px',
      padding: '5% 0 5% 0',
      gap: '0.5rem',
    }}
    >
      <div style={{ opacity: '0.5' }}>
        {activeSlide}
      </div>
      <span
        style={{
          width: '5px',
          height: '100%',
          backgroundColor: '#101010',
          borderRadius: '20px',
          position: 'relative',
        }}
      >
        <span
          style={{
            width: '5px',
            height: `${calculateScrollPercentage(scrollPosition)}%`,
            backgroundColor: '#a594fd',
            borderRadius: '20px',
            position: 'absolute',
            top: '0',
          }}
        />
      </span>

      <div style={{ opacity: '0.5' }}>03</div>
    </div>
  );
}

export default MiniSlider;

MiniSlider.propTypes = {
  scrollPosition: propTypes.number.isRequired,
  activeSlide: propTypes.string.isRequired,
  setActiveSlide: propTypes.func.isRequired,
};
