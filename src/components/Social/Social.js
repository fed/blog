import React from 'react';
import Button from '../Button/Button';
import data from '../../model/social';
import styles from './Social.module.css';

export default function Social() {
  return (
    <nav className={styles.container}>
      {data.map(item => (
        <Button className={styles.link} key={item.id} type={item.id} url={item.url}>
          {item.name}
        </Button>
      ))}
    </nav>
  );
}
