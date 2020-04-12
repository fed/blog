import React from 'react';
import links from '../../data/social';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.container} aria-label="Social media links">
            <ul className={styles.list}>
                {links.map(item => (
                    <li className={styles.listItem} key={item.id}>
                        <a
                            className={styles.link}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className={styles.icon} src={item.icon} alt={item.name} />
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
