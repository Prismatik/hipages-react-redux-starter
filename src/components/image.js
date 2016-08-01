import React from 'react';

const Image = ({ src }) => {
  return (
    <div style={{
      border: '3px solid black',
      padding: '5px',
      display: 'inline-block',
      width: '100px'
    }}>
      <img src={ src } width="100%" />
    </div>
  );
};

export default Image;
