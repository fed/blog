import { Link as UnstyledGatsbyLink } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { gridSize } from '../styles/constants';
import { baseLinkStyles } from '../styles/mixins';
import externalLinkIcon from './link-icon.svg';

const GatsbyLink = styled(UnstyledGatsbyLink)`
    ${baseLinkStyles};
`;

const ExternalLink = styled.a`
    ${baseLinkStyles};
`;

const ExternalLinkIcon = styled.img`
    margin-left: ${1.25 * gridSize}px;
    width: ${2 * gridSize}px;
`;

interface Props {
    isExternal?: boolean;
    to: string;
    children: string | React.ReactNode;
}

export const Link: React.FC<Props> = ({ isExternal = false, to, children }) => {
    if (isExternal) {
        return (
            <>
                <ExternalLink href={to} target="_blank" rel="noopener noreferrer">
                    {children}
                </ExternalLink>
                <ExternalLinkIcon src={externalLinkIcon} alt="External link" />
            </>
        );
    }

    return (
        <GatsbyLink to={to} rel="bookmark">
            {children}
        </GatsbyLink>
    );
};
