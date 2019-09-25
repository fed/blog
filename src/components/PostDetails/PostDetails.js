import React from 'react';
import styles from './PostDetails.module.css';
import calendarIcon from './calendar.svg';
import clockIcon from './clock.svg';

export default function PostDetails(props) {
    return (
        <ul className={styles.list}>
            <li className={styles.listItem}>
                <img
                    src={calendarIcon}
                    alt="Date published"
                    title="Date published"
                    className={styles.icon}
                />
                {props.date}
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
        </ul>
    );
}
