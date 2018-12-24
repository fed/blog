import React from 'react';
import styles from './Hero.module.css';

const email = 'fknussel@gmail.com';

export default function Hero() {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Federico Knüssel</h1>
      <p className={styles.content}>
        I'm a software developer with a keen interest in JavaScript and functional programming, and
        I help development teams ship clean and maintainable code. Feel free to hit me up on{' '}
        <a className={styles.link} href={`mailto:${email}`}>
          {email}
        </a>
        .
      </p>
    </header>
  );
}
