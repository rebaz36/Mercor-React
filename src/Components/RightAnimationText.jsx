import React from 'react';
import PropTypes from 'prop-types';

function RightAnimationText({ title, text }) {
  return (
    <div style={{ width: '425px' }}>
      <h3 style={{
        fontSize: '2.375rem',
        marginBottom: '1rem',
        letterSpacing: '0',
        lineHeight: '1',
        fontWeight: '600',
        color: '#f1f1ef',
        display: 'flex',
        flexDirection: 'column',
      }}
      >
        {title}
      </h3>
      <p style={{
        fontSize: '1.25rem',
        letterSpacing: '-0.01em',
        margin: '0',
        color: '#adadad',
        display: 'flex',
        flexDirection: 'column',
      }}
      >
        {text}
      </p>
    </div>
  );
}

export default RightAnimationText;

RightAnimationText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
