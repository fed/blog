import { Link as UnstyledGatsbyLink } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import externalLinkIcon from '../assets/external-link.svg';
import { baseLinkStyles } from '../styles/mixins';

const GatsbyLink = styled(UnstyledGatsbyLink)`
    ${baseLinkStyles};
`;

const ExternalLink = styled.a`
    ${baseLinkStyles};
`;

const ExternalLinkIcon = styled.img`
    margin-left: 10px;
    width: 16px;
`;

interface Props {
    isExternal?: boolean;
    to?: string;
    children?: string;
}

export const Link: React.FC<Props> = ({ isExternal, to, children }) => {
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
