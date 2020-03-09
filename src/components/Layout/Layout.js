import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import get from 'lodash/get';
import Footer from '../Footer/Footer';
import social from '../../data/social';
import avatarUrl from '../../data/avatar';
import styles from './Layout.module.css';

export default function Layout(props) {
    return (
        <Fragment>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <Link to="/" className={styles.link}>
                        <img src={avatarUrl} alt="My Avatar" className={styles.avatar} />
                        <span className={styles.title}>F. Knüssel</span>
                    </Link>
                </div>
            </header>
            {props.children}
            <Footer links={social} />
        </Fragment>
    );
}
