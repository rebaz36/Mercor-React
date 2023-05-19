import React from 'react';
import PropTypes from 'prop-types';
import RightAnimationContent from './RightAnimationContent';
import RightAnimationText from './RightAnimationText';

function RightAnimationContainer({ Text }) {
  return (
    <div style={{
      padding: '0 2.5rem 4rem 2.5rem',
      boxSizing: 'border-box',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#1f1f1f',
      borderRadius: '1.25rem',

    }}
    >
      <RightAnimationContent />
      <RightAnimationText title={Text.title} text={Text.text} />
    </div>
  );
}

export default RightAnimationContainer;

RightAnimationContainer.propTypes = {
  Text: PropTypes.string.isRequired,
};
