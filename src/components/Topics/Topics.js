import React, { Fragment } from 'react';
import Topic from '../Topic/Topic';
import styles from './Topics.module.css';

export default function Topics(props) {
  return (
    <Fragment>
      {props.topics.map((topic, index) => (
        <article key={index} className={styles.topic}>
          <a name={topic.id}>{topic.name}</a>
          <Topic {...topic} />
        </article>
      ))}
    </Fragment>
  );
}
