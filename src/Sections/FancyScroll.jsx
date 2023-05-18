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
    padding: '200px 0 90vh 0',
    backgroundColor: 'red',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    margin: '0 20%',
    width: '60%',
    gap: '1rem',
    position: 'fixed',
    bottom: '50vh',
  },
  left: {
    backgroundColor: 'green',
    width: '50%',
  },
  right: {
    backgroundColor: 'yellow',
    width: '50%',
  },
};

// eslint-disable-next-line react/prop-types
const FancyScroll = ({ show }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const calculateWordBackgroundColor = (index, scrollPosition) => {
    if (scrollPosition > index) return '#fff';
    return '#2f2f2f';
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
      <div style={styles.content}>
        <div style={styles.left}>
          left
          {scrollPosition}
        </div>
        <div style={styles.right}>
          right
          {scrollPosition}
        </div>
      </div>
    </div>
  );
};

export default FancyScroll;
