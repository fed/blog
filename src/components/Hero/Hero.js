import React from 'react';
import Obfuscate from 'react-obfuscate';
import { Link } from 'gatsby';
import styles from './Hero.module.css';
import avatarUrl from '../../data/avatar';

export default function Hero(props) {
    return (
        <header className={styles.container}>
            <Link to="/">
                <img src={avatarUrl} className={styles.avatar} aria-hidden="true" />
            </Link>
            <h1 className={styles.title}>Federico Knüssel</h1>
            <p className={styles.content}>I'm a Software Engineer with a keen interest in web development, and I help teams ship clean and maintainable code. Feel free to hit me up on <Obfuscate email="hey@fknussel.com" className={styles.link} />.</p>
        </header>
    );
}
