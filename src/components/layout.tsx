import React, { useRef } from 'react';
import styled from 'styled-components';

import { colors, containerDimensions, fontFamilies } from '../styles/constants';
import { Navigation } from './navigation';

const Content = styled.main`
    margin: 0 auto;
    max-width: ${containerDimensions.lg};
    padding: 36px 25px 48px;
`;

const SkipToMainContentButton = styled.button`
    background-color: ${colors.pink};
    border: 1px solid ${colors.grayMedium};
    color: ${colors.white};
    font-family: ${fontFamilies.sansSerif};
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
