import React from 'react';
import styles from './Hero.module.css';

export default function Hero(props) {
    return (
        <header className={styles.container}>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.content}>I'm a software developer with a keen interest in web development and functional programming, and I help software teams ship clean and maintainable code. Feel free to hit me up on <a href="mailto:hey@fknussel.com" className={styles.link}>hey@fknussel.com</a>.</p>
        </header>
    );
}
