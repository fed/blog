import React from 'react';
import { Link } from 'gatsby';
import get from 'lodash/get';
import Footer from '../Footer/Footer';
import avatar from '../../assets/avatar.jpg';
import social from '../../data/social';
import styles from './Layout.module.css';

export default function Layout(props) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <Link to="/" className={styles.link}>
                        <img src={avatar} alt="My Avatar" className={styles.avatar} />
                        <span className={styles.title}>F. Knüssel</span>
                    </Link>
                    {props.details}
                </div>
            </header>
            <div className={styles.content}>{props.children}</div>
            <Footer links={social} />
        </div>
    );
}
