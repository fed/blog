import React from 'react';
import PostDetails from '../PostDetails/PostDetails';
import styles from './Post.module.css';

export default function Post(props) {
    return (
        <article>
            <header className={styles.header}>
                <h1 className={styles.title}>{props.title}</h1>
                <PostDetails
                    date={props.date}
                    category={props.category}
                    timeToRead={props.timeToRead}
                />
            </header>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: props.body }} />
        </article>
    );
}
