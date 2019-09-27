import React from 'react';
import { Link } from 'gatsby';
import styles from './Content.module.css';

export default function Content(props) {
    return props.categories.map(category => (
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

                    {category.posts && category.posts.length > 0 && (
                        <ul className={styles.links}>
                            {category.posts.map(post => (
                                <li key={post.slug} className={styles.linkWrapper}>
                                    <p className={styles.linkTitle}>
                                        <Link to={post.slug} className={styles.link} rel="bookmark">
                                            {post.title}
                                        </Link>
                                    </p>

                                    {post.spoiler && (
                                        <p className={styles.linkDescription}>{post.spoiler}</p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    ));
}
