import './button1.css';

import PropTypes from 'prop-types';
import React from 'react';

/**
 * Primary UI component for user interaction
 */
export const Button1 = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button1.propTypes = {
  /**
   * What background color to use
   */

  backgroundColor: PropTypes.string,
  /**
   * Button contents
   */

  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */

  onClick: PropTypes.func,
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button1.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
  primary: false,
  size: 'medium',
};
