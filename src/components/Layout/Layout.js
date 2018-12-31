import React from 'react';
import { Link } from 'gatsby';
import get from 'lodash/get';
import Footer from '../Footer/Footer';
import { social } from '../../data';
import styles from './Layout.module.css';

export default function Layout(props) {
  const siteTitle = get(props, 'data.site.siteMetadata.title');

  return (
    <div className={props.className}>
      <header className={styles.header}>
        <Link to={'/'}>{siteTitle}</Link>
      </header>
      <div className={styles.content}>{props.children}</div>
      <Footer links={social} />
    </div>
  );
}
