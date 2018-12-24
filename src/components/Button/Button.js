import React from 'react';
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
