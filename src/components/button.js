import React from 'react';

const Button = ({ text, buttonAction }) => {
  return (
    <button onClick={buttonAction}>{text}</button>
  );
};

export default Button;
