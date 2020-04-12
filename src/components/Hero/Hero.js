import React from 'react';
import Obfuscate from 'react-obfuscate';
import { Link } from 'gatsby';
import styles from './Hero.module.css';
import avatarUrl from '../../data/avatar';

export default function Hero(props) {
    return (
        <div className={styles.container}>
            <Link to="/" className={styles.avatarLink} aria-hidden="true">
                <img src={avatarUrl} className={styles.avatar} />
            </Link>
            <h1 className={styles.title}>Federico Knüssel</h1>
            <p className={styles.content}>I'm a software engineer with a keen interest in web development, and I help teams ship clean and maintainable code. Feel free to hit me up on <Obfuscate email="hey@fknussel.com" className={styles.emailLink} />.</p>
        </div>
    );
}
