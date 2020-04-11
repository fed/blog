import React from 'react';
import Link from '../Link/Link';
import styles from './Archive.module.css';

export default function Archive(props) {
    return (
        <div className={styles.container}>
            {props.posts.map((post, index) => (
                <article key={index} className={styles.post}>
                    <p className={styles.date}>{post.date}</p>
                    <h2 className={styles.title}>
                        <Link to={post.url || post.slug} isExternal={post.isExternal}>
                            {post.title}
                        </Link>
                    </h2>
                    <p className={styles.spoiler} dangerouslySetInnerHTML={{ __html: post.spoiler }} />
                </article>
            ))}
        </div>
    );
}
