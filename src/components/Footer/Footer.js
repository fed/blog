import React from 'react';
import data from '../../model/social';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      {data.map(item => (
        <a
          className={styles.link}
          href={item.url}
          key={item.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.icon} src={item.icon} alt={item.name} title={item.name} />
          <span className={styles.srOnly}>{item.name}</span>
        </a>
      ))}
    </footer>
  );
}
