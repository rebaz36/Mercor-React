import React, { useEffect, useState } from 'react';

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    fontSize: '6vh',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    overflow: 'auto',
    padding: '200px 0 90vh 0',
    backgroundColor: '#000',
  },
  textContainer: {
    padding: '0',
  },
};

const TextAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const calculateWordBackgroundColor = (index, scrollPosition) => {
    if (scrollPosition > index) return '#fff';
    return '#2f2f2f';
  };

  const calculateScroll = (scrollPosition) => {
    if (scrollPosition < 1170) {
      return {
        border: 'none',
        padding: '0 2rem',
        margin: '0 85px 200px 85px',
        maxWidth: '900px',
        position: 'fixed',
      };
    }
    return {
      border: 'none',
      padding: '0 2rem',
      margin: '2130px 85px 0 85px',
      maxWidth: '900px',
      position: 'relative',
    };
  };

  const words = [
    { index: 0, value: 'In' },
    { index: 30, value: 'Chronicle' },
    { index: 60, value: 'everything' },
    { index: 90, value: 'is' },
    { index: 120, value: 'made' },
    { index: 150, value: 'with' },
    { index: 180, value: 'Blocks' },
    { index: 210, value: 'that' },
    { index: 240, value: 'come' },
    { index: 270, value: 'with' },
    { index: 300, value: 'pixel' },
    { index: 330, value: 'perfect' },
    { index: 360, value: 'design,' },
    { index: 390, value: 'interactivity' },
    { index: 420, value: 'and' },
    { index: 450, value: 'motion' },
    { index: 480, value: 'out' },
    { index: 510, value: 'of' },
    { index: 540, value: 'the' },
    { index: 570, value: 'box.' },
    { index: 600, value: 'Instead' },
    { index: 630, value: 'of' },
    { index: 660, value: 'designing' },
    { index: 690, value: 'from' },
    { index: 720, value: 'scratch,' },
    { index: 750, value: 'simply' },
    { index: 780, value: 'choose' },
    { index: 810, value: 'the' },
    { index: 840, value: 'right' },
    { index: 870, value: 'one' },
    { index: 900, value: 'from' },
    { index: 930, value: 'our' },
    { index: 960, value: 'library' },
    { index: 990, value: 'of' },
    { index: 1020, value: 'blocks' },
    { index: 1050, value: 'and' },
    { index: 1080, value: 'see' },
    { index: 1110, value: 'the' },
    { index: 1140, value: 'magic' },
    { index: 1170, value: 'unfold.' },
  ];

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

  return (
    <div style={styles.container}>
      <div
        style={calculateScroll(scrollPosition)}
      >
        <div style={styles.textContainer}>
          {words.map((word) => (
            <span
              key={word.index}
              style={{
                color: calculateWordBackgroundColor(word.index, scrollPosition),
                transition: 'color 0.5s ease',
              }}
            >
              {word.value}
              {' '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextAnimation;
