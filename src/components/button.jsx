import React from 'react';
import styled from 'styled-components';

import { baseFocusStateStyles, baseSansSerifStyles } from '../styles/mixins';

const BaseButton = styled.a`
    ${baseFocusStateStyles};
    ${baseSansSerifStyles};
    border: 0;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    padding: 10px 15px 8px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.2s ease;
    :active {
        transform: translate(0, 3px);
    }
    :hover {
        border: inherit;
    }
    :focus {
        border: 1px solid #fff;
        padding: 10px 15px;
    }
`;

const TwitterButton = styled(BaseButton)`
    background-color: #2ca9e1;
    box-shadow: 0 6px 0 #2695bc;
    :active {
        box-shadow: 0 2px 0 #2695bc;
    }
`;

const GitHubButton = styled(BaseButton)`
    background-color: #353631;
    box-shadow: 0 6px 0 #141412;
    :active {
        box-shadow: 0 2px 0 #141412;
    }
`;

const MediumButton = styled(BaseButton)`
    background-color: #4caf50;
    box-shadow: 0 6px 0 #388e3c;
    :active {
        box-shadow: 0 2px 0 #388e3c;
    }
`;

const CodePenButton = styled(BaseButton)`
    background-color: #657e91;
    box-shadow: 0 6px 0 #374957;
    :active {
        box-shadow: 0 2px 0 #374957;
    }
`;

const LinkedInButton = styled(BaseButton)`
    background-color: #0073b2;
    box-shadow: 0 6px 0 #005377;
    :active {
        box-shadow: 0 2px 0 #005377;
    }
`;

export default function Button(props) {
    let BrandedButton;

    switch (props.type) {
        case 'twitter':
            BrandedButton = TwitterButton;
            break;
        case 'github':
            BrandedButton = GitHubButton;
            break;
        case 'medium':
            BrandedButton = MediumButton;
            break;
        case 'codepen':
            BrandedButton = CodePenButton;
            break;
        case 'linkedin':
            BrandedButton = LinkedInButton;
            break;
    }

    if (!BrandedButton) {
        return null;
    }

    return (
        <BrandedButton
            className={props.className}
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            {props.children}
        </BrandedButton>
    );
}
