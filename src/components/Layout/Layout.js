import React from 'react';
import { Link } from 'gatsby';
import get from 'lodash/get';
import Footer from '../Footer/Footer';
import avatar from '../../assets/avatar.jpeg';
import { social } from '../../data';
import styles from './Layout.module.css';

export default function Layout(props) {
    return (
        <div className={props.className}>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <Link to={'/'} className={styles.title}>
                        <img src={avatar} alt="My Avatar" className={styles.avatar} />
                        F. Knüssel
                    </Link>
                </div>
            </header>
            <div className={styles.content}>{props.children}</div>
            <Footer links={social} />
        </div>
    );
}
