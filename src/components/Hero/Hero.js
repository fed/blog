import React from 'react';
import styles from './Hero.module.css';

export default function Hero(props) {
    return (
        <header className={styles.container}>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.content}>{props.description}</p>
        </header>
    );
}
