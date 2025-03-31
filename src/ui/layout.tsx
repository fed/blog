import { Link } from 'gatsby';
import React from 'react';

import {
    skipLinkStyle,
    contentStyle,
    headerStyle,
    navigationMenuStyle,
    logoLinkStyle,
    emojiStyle,
    siteNameContainerStyle,
    listStyle,
    listItemStyle,
    baseNavigationLinkStyle,
    taglineStyle,
    nameStyle,
} from './layout.css';
import engineerEmojiSrc from '../assets/engineer.svg';
import { srOnlyStyle } from '../styles/common.css';

interface Props {
    children: React.ReactNode;
}

export const Layout: React.FunctionComponent<Props> = ({ children }) => (
    <>
        <a className={skipLinkStyle} href="#main" data-testid="layout-skip-link">
            Skip to main content
        </a>

        <header className={headerStyle}>
            <nav className={navigationMenuStyle}>
                <Link className={logoLinkStyle} to="/" data-testid="navigation-logo">
                    <img className={emojiStyle} src={engineerEmojiSrc} alt="" data-testid="navigation-logo-image" />
                    <span className={siteNameContainerStyle} data-testid="navigation-logo-title">
                        <div className={nameStyle}>
                            F. Knüssel<span className={srOnlyStyle}>: </span>
                        </div>
                        <div className={taglineStyle}>Frontend Developer</div>
                    </span>
                </Link>

                <ul className={listStyle}>
                    <li className={listItemStyle}>
                        <Link className={baseNavigationLinkStyle} to="/about" data-testid="layout-navigation-link">
                            About
                        </Link>
                    </li>
                    <li className={listItemStyle}>
                        <Link className={baseNavigationLinkStyle} to="/" data-testid="layout-navigation-link">
                            Blog
                        </Link>
                    </li>
                    <li className={listItemStyle}>
                        <Link className={baseNavigationLinkStyle} to="/now" data-testid="layout-navigation-link">
                            Now
                        </Link>
                    </li>
                    <li className={listItemStyle}>
                        <Link className={baseNavigationLinkStyle} to="/colophon" data-testid="layout-navigation-link">
                            Colophon
                        </Link>
                    </li>
                    <li className={listItemStyle}>
                        <a className={baseNavigationLinkStyle} href="https://github.com/fed" data-testid="layout-navigation-link">
                            GitHub
                        </a>
                    </li>
                    <li className={listItemStyle}>
                        <a className={baseNavigationLinkStyle} href="/rss.xml" data-testid="layout-navigation-link">
                            RSS
                        </a>
                    </li>
                </ul>
            </nav>
        </header>

        <main className={contentStyle} id="main" data-testid="layout-content">
            {children}
        </main>
    </>
);
