import React from 'react';
import styles from './Topic.module.css';

export default function Topic({ image, title, links }) {
    return (
        <div className={styles.container}>
            <figure className={styles.leftColumn}>
                <img className={styles.image} src={image} alt={title} />
                <figcaption className={styles.caption}>{title}</figcaption>
            </figure>

            <div className={styles.rightColumn}>
                <h1 className={styles.title}>{title}</h1>

                {links && links.length > 0 && (
                    <ul className={styles.links}>
                        {links.map((link, index) => (
                            <li key={index} className={styles.linkWrapper}>
                                <p className={styles.linkTitle}>
                                    <a href={link.url} className={styles.link}>
                                        {link.title}
                                    </a>
                                </p>

                                {link.description && (
                                    <p className={styles.linkDescription}>{link.description}</p>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
