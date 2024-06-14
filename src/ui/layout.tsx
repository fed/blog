import { Link } from 'gatsby';
import React from 'react';

import {
    skipLinkStyle,
    contentStyle,
    headerStyle,
    navigationMenuStyle,
    logoLinkStyle,
    emojiStyle,
    siteNameStyle,
    listStyle,
    listItemStyle,
    baseNavigationLinkStyle,
    dimmedSiteNameStyle,
} from './layout.css';
import fishEmojiSrc from '../assets/1f420.svg';
import chickEmojiSrc from '../assets/1f423.svg';
import engineerEmojiSrc from '../assets/1f468-200d-1f4bb.svg';
import dinosaurEmojiSrc from '../assets/1f995.svg';
import kangarooEmojiSrc from '../assets/1f998.svg';
import flamingoEmojiSrc from '../assets/1f9a9.svg';
import dogEmojiSrc from '../assets/1f9ae.svg';

const EMOJIS = [flamingoEmojiSrc, dogEmojiSrc, fishEmojiSrc, chickEmojiSrc, dinosaurEmojiSrc, kangarooEmojiSrc, engineerEmojiSrc];

interface Props {
    children: React.ReactNode;
}

export const Layout: React.FunctionComponent<Props> = ({ children }) => {
    const [emojiSrc, setEmojiSrc] = React.useState(null);

    React.useEffect(() => {
        setEmojiSrc(EMOJIS[Math.floor(Math.random() * EMOJIS.length)]);
    }, []);

    return (
        <>
            <a className={skipLinkStyle} href="#main" data-testid="layout-skip-link">
                Skip to main content
            </a>

            <header className={headerStyle}>
                <nav className={navigationMenuStyle}>
                    <Link className={logoLinkStyle} to="/" data-testid="navigation-logo">
                        {emojiSrc ? <img className={emojiStyle} src={emojiSrc} alt="" data-testid="navigation-logo-image" /> : null}
                        <span className={siteNameStyle} data-testid="navigation-logo-title">
                            fedknu<span className={dimmedSiteNameStyle}>.com</span>
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
                            <Link className={baseNavigationLinkStyle} to="/uses" data-testid="layout-navigation-link">
                                Uses
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
                            <a
                                className={baseNavigationLinkStyle}
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/fed"
                                data-testid="layout-navigation-link"
                            >
                                GitHub
                            </a>
                        </li>
                        <li className={listItemStyle}>
                            <a
                                className={baseNavigationLinkStyle}
                                target="_blank"
                                // The `me` rel is required by Mastodon for verification purposes
                                // eslint-disable-next-line react/no-invalid-html-attribute
                                rel="me noopener noreferrer"
                                href="https://mas.to/@fed"
                                data-testid="layout-navigation-link"
                            >
                                Mastodon
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
};
