import React from 'react';
import links from '../../data/social';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer role="contentinfo" className={styles.container}>
            <ul aria-label="Social media links" className={styles.list}>
                {links.map(item => (
                    <li className={styles.listItem}>
                        <a
                            className={styles.link}
                            href={item.url}
                            key={item.id}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className={styles.icon}
                                src={item.icon}
                                alt={item.name}
                                title={item.name}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
