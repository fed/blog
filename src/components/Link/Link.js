import React, { Fragment } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import externalLinkIcon from './external-link.svg';
import styles from './Link.module.css';

export default function Link(props) {
    if (!props.isExternal) {
        return (
            <GatsbyLink to={props.to} className={styles.link} rel="bookmark">
                {props.children}
            </GatsbyLink>
        );
    }

    return (
        <Fragment>
            <a
                href={props.to}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {props.children}
            </a>
            <img src={externalLinkIcon} className={styles.external} alt="External link" />
        </Fragment>
    );
}
