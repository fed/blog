import React, { Fragment } from 'react';
import Hero from '../Hero/Hero';
import Social from '../Social/Social';
import Footer from '../Footer/Footer';
import social from '../../data/social';
import styles from './Grid.module.css';

export default function Grid(props) {
    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <Hero />
                    <Social links={social} />
                </div>

                <div className={styles.rightColumn}>
                    {props.children}
                </div>
            </div>
            <Footer links={social} />
        </Fragment>

    );
}
