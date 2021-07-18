import React from 'react';

const Button = ({ children }) => {
  function handleClick() {
    window.alert('Hello here!');
  }

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
