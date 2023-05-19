import React, { useEffect, useState } from 'react';
import StarShape from '../Assets/StarShape';
import MiniSlider from '../Components/MiniSlider';

const styles = {
  container: {
    height: '200vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    fontSize: '6vh',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    padding: '200px 0 90vh 0',
    backgroundColor: 'black',
  },
  left: {
    padding: '0',
    margin: '0',
    boxSizing: 'border-box',
    width: '50%',
    height: '60vh',
    display: 'flex',
    flexDirection: 'column',
  },
  right: {
    padding: '0 4rem 0 0',
    margin: '0',
    boxSizing: 'border-box',
    backgroundColor: '#101010',
    borderRadius: '1.25rem',
    width: '50%',
    height: '60vh',
    display: 'flex',
    flexDirection: 'row',
  },
};

// eslint-disable-next-line react/prop-types
const FancyScroll = ({ show }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSlide, setActiveSlide] = useState('01');

  // eslint-disable-next-line no-unused-vars
  const ContainerStyles = (scrollPosition) => {
    if (scrollPosition > 2050) {
      return {
        display: 'flex',
        margin: '0 10%',
        width: '80%',
        gap: '1rem',
        bottom: '23vh',
        position: 'fixed',
      };
    } return {
      display: 'flex',
      margin: '0 10%',
      width: '80%',
      gap: '1rem',
      bottom: '76vh',
      position: 'relative',
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // if show is false, return null
  if (!show) return null;

  return (
    <div style={styles.container} id="FancyScrollContainer">
      <div style={ContainerStyles(scrollPosition)}>
        <div style={styles.left}>
          <div style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', marginBottom: '1rem',
          }}
          >
            <StarShape />
            <h4 style={{
              fontWeight: '400', color: '#a594fd', letterSpacing: '-0.01em', fontSize: '1.5rem', padding: '0', margin: '0 0 0 -12px',
            }}
            >
              Workflow
            </h4>

          </div>
          <h2 style={{
            margin: '0 0 2.5rem 0', paddingRight: '17%', fontSize: '5.5rem', color: '#f1f1ef', lineHeight: '1', fontWeight: '600', letterSpacing: '-0.02em',
          }}
          >
            Create at the speed of thought
          </h2>
          <p style={{
            paddingRight: '22%', fontSize: '1rem', color: '#adadad', letterSpacing: '-0.01em',
          }}
          >
            Focus on your getting your thoughts out and crafting the best
            message while Chronicle does the heavy lifting for you
          </p>
          {scrollPosition}
        </div>
        <div style={styles.right}>
          right
          {scrollPosition}
        </div>
        {/* eslint-disable-next-line max-len */}
        <MiniSlider scrollPosition={scrollPosition} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
      </div>
    </div>
  );
};

export default FancyScroll;

// 1250 - 3928 = 2678
