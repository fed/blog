import { Link as UnstyledGatsbyLink } from 'gatsby';
import React, { Fragment } from 'react';
import styled from 'styled-components';

import externalLinkIcon from '../images/external-link.svg';
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

export default function Link(props) {
    if (!props.isExternal) {
        return (
            <GatsbyLink to={props.to} rel="bookmark">
                {props.children}
            </GatsbyLink>
        );
    }

    return (
        <Fragment>
            <ExternalLink href={props.to} target="_blank" rel="noopener noreferrer">
                {props.children}
            </ExternalLink>
            <ExternalLinkIcon src={externalLinkIcon} alt="External link" />
        </Fragment>
    );
}
