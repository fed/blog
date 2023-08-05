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
    linkStyle,
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
                    <GatsbyLink className={linkStyle} to="/about" data-testid="navigation-link">
                        About
                    </GatsbyLink>
                </li>
                <li className={listItemStyle}>
                    <a
                        className={linkStyle}
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
                        className={linkStyle}
                        target="_blank"
                        // The `me` rel is required by Mastodon for verification purposes
                        // eslint-disable-next-line react/no-invalid-html-attribute
                        rel="me noopener noreferrer"
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
