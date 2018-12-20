import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Button.module.css';

export default function Button({ children, type, url, className }) {
  const computedClassName = classnames(styles.button, styles[type], className);

  return (
    <a className={computedClassName} href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['twitter', 'medium', 'github', 'linkedin']).isRequired,
  url: PropTypes.string.isRequired,
  className: PropTypes.string
};
