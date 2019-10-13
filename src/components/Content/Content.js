import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import externalLinkIcon from './external-link.svg';
import styles from './Content.module.css';

export function renderLink(post) {
    if (post.isExternal) {
        return (
            <Fragment>
                <a href={post.url} className={styles.link} target="_blank" rel="noopener noreferrer">
                    {post.title}
                </a>
                <img src={externalLinkIcon} className={styles.external} alt="External link" />
            </Fragment>
        );
    } else {
        return (
            <Link to={post.slug} className={styles.link} rel="bookmark">
                {post.title}
            </Link>
        );
    }
}

export default function Content(props) {
    return props.categories
        .filter(category => category.posts && category.posts.length > 0)
        .map(category => (
            <div key={category.id} className={styles.category}>
                <a name={category.id}></a>
                <div className={styles.container}>
                    <div className={styles.leftColumn}>
                        <img
                            className={styles.image}
                            src={category.imageSrc}
                            aria-hidden="true"
                        />
                    </div>

                    <div className={styles.rightColumn}>
                        <h1 className={styles.title}>{category.title}</h1>
                        <ul className={styles.links}>
                            {category.posts.map(post => (
                                <li key={post.slug} className={styles.linkWrapper}>
                                    <p className={styles.linkTitle}>
                                        {renderLink(post)}
                                    </p>

                                    {post.spoiler && (
                                        <p className={styles.linkDescription}>{post.spoiler}</p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        ));
}
