import React from 'react';
import classnames from 'classnames';
import styles from './PostDetails.module.css';
import calendarIcon from './calendar.svg';
import categoryIcon from './category.svg';
import clockIcon from './clock.svg';

export default function PostDetails(props) {
    return (
        <ul className={classnames(styles.list, props.className)}>
            <li className={styles.listItem}>
                <img
                    src={calendarIcon}
                    alt="Date published"
                    title="Date published"
                    className={styles.icon}
                />
                <time pubdate="pubdate">{props.date}</time>
            </li>
            <li className={styles.listItem}>
                <img
                    src={clockIcon}
                    alt="Time to read"
                    title="Time to read"
                    className={styles.icon}
                />
                {props.timeToRead} min.
            </li>
            <li className={styles.listItem}>
                <img
                    src={categoryIcon}
                    alt="Category"
                    title="Category"
                    className={styles.icon}
                />
                {props.category}
            </li>
        </ul>
    );
}
