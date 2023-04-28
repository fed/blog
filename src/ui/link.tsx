import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

import externalLinkIcon from './link-icon.svg';
import { externalLinkIconStyle, linkStyle } from './link.css';

interface Props {
    isExternal?: boolean;
    to: string;
    children: string | React.ReactNode;
}

export const Link: React.FC<Props> = ({ isExternal = false, to, children }) => {
    if (isExternal) {
        return (
            <>
                <a className={linkStyle} href={to} target="_blank" rel="noopener noreferrer" data-testid="link-external-anchor">
                    {children}
                </a>
                <img className={externalLinkIconStyle} src={externalLinkIcon} alt="External link" data-testid="link-external-icon" />
            </>
        );
    }

    return (
        <GatsbyLink className={linkStyle} to={to} rel="bookmark">
            {children}
        </GatsbyLink>
    );
};
