import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

import avatarSrc from './navigation-icon.svg';
import {
    headerStyle,
    navigationMenuStyle,
    logoLinkStyle,
    avatarStyle,
    siteNameStyle,
    listStyle,
    listItemStyle,
    listItemLinkStyle,
} from './navigation.css';

export const Navigation: React.FC = () => (
    <header className={headerStyle}>
        <nav className={navigationMenuStyle}>
            <GatsbyLink className={logoLinkStyle} to="/" data-testid="navigation-logo">
                <img className={avatarStyle} src={avatarSrc} alt="" data-testid="navigation-logo-image" />
                <span className={siteNameStyle} data-testid="navigation-logo-title">
                    Federico Knüssel
                </span>
            </GatsbyLink>
            <ul className={listStyle}>
                <li className={listItemStyle}>
                    <GatsbyLink className={listItemLinkStyle} to="/" data-testid="navigation-link">
                        Archive
                    </GatsbyLink>
                </li>
                <li className={listItemStyle}>
                    <GatsbyLink className={listItemLinkStyle} to="/about" data-testid="navigation-link">
                        About
                    </GatsbyLink>
                </li>
                <li className={listItemStyle}>
                    <a
                        className={listItemLinkStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/fed"
                        data-testid="navigation-link"
                    >
                        GitHub
                    </a>
                </li>
                <li className={listItemStyle}>
                    <a
                        className={listItemLinkStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/fedknu"
                        data-testid="navigation-link"
                    >
                        Twitter
                    </a>
                </li>
                <li className={listItemStyle}>
                    <a
                        className={listItemLinkStyle}
                        target="_blank"
                        // Even though it's not a valid attribute, "me" is required for Mastodon verification purposes
                        rel="me noopener noreferrer" // eslint-disable-line react/no-invalid-html-attribute
                        href="https://mas.to/@fed"
                        data-testid="navigation-link"
                    >
                        Mastodon
                    </a>
                </li>
            </ul>
        </nav>
    </header>
);
