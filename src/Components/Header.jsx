import React from 'react';
import Logo from '../Assets/Logo';

const styles = {
  header: {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '40px',
    backgroundColor: 'transparent', // Updated background color to #000
    position: 'fixed',
    width: '100%',
  },
  logo: {
    transform: 'scale(1.5)',
  },
  logoImage: {
    width: '100px',
    height: 'auto',
  },
  buttonContainer: {
    marginLeft: '10px',
  },
  button: {
    padding: '1rem 1.5rem',
    backgroundColor: '#fff', // Updated button background color to #fff
    color: '#000', // Updated text color to #000
    border: 'none',
    borderRadius: '0.7rem', // Updated border radius to 0.7rem
    fontSize: '1.25rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

const Header = () => (
  <header style={styles.header}>
    <div style={styles.logo}>
      <Logo style={styles.logoImage} />
    </div>
    <div style={styles.buttonContainer}>
      <button type="button" style={styles.button}>Join Beta</button>
    </div>
  </header>
);

export default Header;
