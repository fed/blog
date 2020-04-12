import React from 'react';
import { Link } from 'gatsby';
import styles from './NotFound.module.css';
import puppiesImage from './puppies.jpg';

export default function NotFound() {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Page Not Found</h1>
            <p className={styles.content}>Looks like I haven't written this post yet.</p>
            <p className={styles.content}>In the meantime, here's a picture of two cute little puppies:</p>
            <p>
                <img
                    alt="Picture of one cute black labrador puppy hugging another puppy"
                    src={puppiesImage}
                    className={styles.image} />
            </p>
            <nav><Link to="/" className={styles.link}>Go back to the homepage</Link></nav>
        </main>
    );
}
