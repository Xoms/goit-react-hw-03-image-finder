import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styles';

const Button = (props) => {
  const { caption, handleClick } = props
  return (
  <Btn type="button"  onClick={handleClick}> 
    {caption}
  </Btn>
)};

Button.propTypes = {
  caption: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  caption: '',
  handleClick: () => {}
};

export default Button;
