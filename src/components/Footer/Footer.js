import React from 'react';
import classnames from 'classnames';
import links from '../../data/social';
import styles from './Footer.module.css';

export default function Footer(props) {
    const className = classnames(styles.container, {
        [styles.inverse]: props.inverse
    });

    return (
        <footer className={className}>
            {links.map(item => (
                <a
                    className={styles.link}
                    href={item.url}
                    key={item.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                >
                    <img
                        className={styles.icon}
                        src={item.icon}
                        alt={item.name}
                        title={item.name}
                    />
                </a>
            ))}
        </footer>
    );
}
