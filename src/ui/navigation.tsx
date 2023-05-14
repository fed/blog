import { styled, css } from '@compiled/react';
import { Link as UnstyledGatsbyLink } from 'gatsby';
import React from 'react';

import { colors, containerDimensions, fontFamilies, fontSizes, fontWeights, gridSize, lineHeights } from '../styles/constants';
import { baseFocusStateStyles } from '../styles/mixins';
import avatarSrc from './navigation-icon.svg';

const Header = styled.header`
    background-color: #f6f8fa;
    position: relative;

    &::after {
        background: linear-gradient(
            180deg,
            rgba(9, 30, 66, 0.13) 0,
            rgba(9, 30, 66, 0.13) 1px,
            rgba(9, 30, 66, 0.08) 1px,
            rgba(9, 30, 66, 0) 4px
        );
        content: '';
        height: ${0.5 * gridSize}px;
        left: 0;
        position: absolute;
        right: 0;
        top: 100%;
    }
`;

const NavigationMenu = styled.nav`
    align-items: center;
    display: flex; // Enable scrolling to provide access to all navigation menu items on mobile
    overflow-x: scroll;
    padding: ${1.75 * gridSize}px 0 ${1.75 * gridSize}px ${3 * gridSize}px;

    @media (min-width: ${containerDimensions.sm}) {
        margin: 0 auto;
        max-width: ${containerDimensions.lg};
        overflow-x: hidden; // Hide the scrollbar on Windows (desktop)
    }
`;

const LogoLink = styled(UnstyledGatsbyLink)`
    ${baseFocusStateStyles};
    align-items: center;
    display: flex;
    margin-right: ${3.5 * gridSize}px;
    text-decoration: none;
    width: max-content;
`;

const Avatar = styled.img`
    height: ${2.5 * gridSize}px;
    margin-right: ${1.25 * gridSize}px;
    width: ${2.5 * gridSize}px;
`;

const SiteName = styled.span`
    align-items: center;
    color: ${colors.navy};
    font-family: ${fontFamilies.sansSerif};
    font-size: ${fontSizes.sm};
    font-weight: ${fontWeights.bold};
    line-height: ${lineHeights.sm};
    white-space: nowrap;
`;

const List = styled.ul`
    display: flex;
    margin: 0;
    padding-left: 0;
`;

const ListItem = styled.li`
    color: ${colors.navy};
    display: inline-block;
    font-size: ${fontSizes.xs};
    font-weight: ${fontWeights.normal};
    line-height: ${lineHeights.sm};
    list-style: none;
    margin-bottom: -1px;

    &:not(:last-child) {
        margin-right: ${2 * gridSize}px;
    }
`;

const baseNavigationLinkStyles = css`
    ${baseFocusStateStyles};
    border-radius: 3px;
    color: ${colors.navy};
    display: inline-block;
    font-family: ${fontFamilies.sansSerif};
    text-decoration: none;
    transition: background-color 0.1s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38);

    &:hover {
        color: ${colors.blue};
        text-decoration: none;
    }
`;

const ListItemExternalLink = styled.a`
    ${baseNavigationLinkStyles};
`;

const ListItemInternalLink = styled(UnstyledGatsbyLink)`
    ${baseNavigationLinkStyles};
`;

export const Navigation: React.FC = () => (
    <Header>
        <NavigationMenu>
            <LogoLink to="/" data-testid="navigation-logo">
                <Avatar src={avatarSrc} alt="" data-testid="navigation-logo-image" />
                <SiteName data-testid="navigation-logo-title">Federico Knüssel</SiteName>
            </LogoLink>
            <List>
                <ListItem>
                    <ListItemInternalLink to="/" data-testid="navigation-link">
                        Archive
                    </ListItemInternalLink>
                </ListItem>
                <ListItem>
                    <ListItemInternalLink to="/about" data-testid="navigation-link">
                        About
                    </ListItemInternalLink>
                </ListItem>
                <ListItem>
                    <ListItemExternalLink
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/fed"
                        data-testid="navigation-link"
                    >
                        GitHub
                    </ListItemExternalLink>
                </ListItem>
                <ListItem>
                    <ListItemExternalLink
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/fedknu"
                        data-testid="navigation-link"
                    >
                        Twitter
                    </ListItemExternalLink>
                </ListItem>
                <ListItem>
                    <ListItemExternalLink
                        target="_blank"
                        rel="me noopener noreferrer"
                        href="https://mas.to/@fed"
                        data-testid="navigation-link"
                    >
                        Mastodon
                    </ListItemExternalLink>
                </ListItem>
            </List>
        </NavigationMenu>
    </Header>
);
