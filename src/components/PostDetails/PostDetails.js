import React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import styles from './PostDetails.module.css';
import calendarIcon from './calendar.svg';
import categoryIcon from './category.svg';

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
                    src={categoryIcon}
                    alt="Category"
                    title="Category"
                    className={styles.icon}
                />
                {props.categoryTitle}
            </li>
        </ul>
    );
}
