import React from 'react';

const Text = ({ text }) => {
  return (
    <span style={{
      color: '#333',
      fontFamily: 'sans-serif'
    }}>{ text }</span>
  );
};

export default Text;
