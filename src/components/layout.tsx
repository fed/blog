import React, { useRef } from 'react';
import styled from 'styled-components';

import { fontFamilySansSerif, sizeContainerLarge } from '../styles/mixins';
import { Navigation } from './navigation';

const Content = styled.main`
    margin: 0 auto;
    max-width: ${sizeContainerLarge};
    padding: 36px 25px 48px;
`;

const SkipToMainContentButton = styled.button`
    background-color: #dc2a5f;
    border: 1px solid #ccc;
    color: #fff;
    font-family: ${fontFamilySansSerif};
    height: 50px;
    left: 0;
    position: fixed;
    top: 0;
    transform: translateY(-50px);
    z-index: 10;
    :focus {
        transform: translateY(0);
    }
`;

export const Layout: React.FC = ({ children }) => {
    const mainContent = useRef(null);
    const handleButtonClick = () => {
        mainContent.current.querySelector('a').focus();
    };

    return (
        <>
            <SkipToMainContentButton type="button" onClick={handleButtonClick}>
                Skip to main content
            </SkipToMainContentButton>
            <Navigation />
            <Content ref={mainContent}>{children}</Content>
        </>
    );
};
