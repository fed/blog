import React from 'react';
import Button from '../Button/Button';
import styles from './Social.module.css';

export default function Social(props) {
  return (
    <nav className={styles.container}>
      {props.links.map(item => (
        <Button className={styles.link} key={item.id} type={item.id} url={item.url}>
          {item.name}
        </Button>
      ))}
    </nav>
  );
}
