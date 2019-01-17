import React from 'react';
import styles from './Footer.module.css';

export default function Footer(props) {
    return (
        <footer className={styles.container}>
            {props.links.map(item => (
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

Footer.defaultProps = {
    links: []
};
