import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Layout from '../Layout/Layout';
import SEO from '../SEO';
import PostDetails from '../PostDetails/PostDetails';
import styles from './Post.module.css';

export default function Post(props) {
    const postDetails = (
        <PostDetails date={props.date} timeToRead={props.timeToRead} />
    );

    return (
        <Layout className={styles.layout} details={postDetails}>
            <h1 className={styles.title}>{props.title}</h1>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: props.body }} />
        </Layout>
    );
}
