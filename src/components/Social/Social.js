import React from 'react';
import Button from '../Button/Button';
import links from '../../data/social';
import styles from './Social.module.css';

export default function Social() {
    return (
        <nav className={styles.container} aria-label="Social media links">
            {links.map(item => (
                <Button className={styles.link} key={item.id} type={item.id} url={item.url}>
                    {item.name}
                </Button>
            ))}
        </nav>
    );
}
