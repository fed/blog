import type { ReactNode } from 'react';
import React, { useRef } from 'react';
import styled from 'styled-components';

import { colors, containerDimensions, fontFamilies, gridSize } from '../styles/constants';
import { Navigation } from './navigation';

const SkipToMainContentButton = styled.button`
    background-color: ${colors.pink};
    border: 1px solid ${colors.grayMedium};
    color: ${colors.white};
    font-family: ${fontFamilies.sansSerif};
    height: ${6.25 * gridSize}px;
    left: 0;
    position: fixed;
    top: 0;
    transform: translateY(-${6.25 * gridSize}px);
    z-index: 10;

    :focus {
        transform: translateY(0);
    }
`;

const Content = styled.main`
    margin: 0 auto;
    max-width: ${containerDimensions.lg};
    padding: ${4.5 * gridSize}px ${3 * gridSize}px ${6 * gridSize}px;
`;

interface Props {
    children: ReactNode;
    header?: ReactNode;
}

export const Layout: React.FC<Props> = ({ children, header }) => {
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
            {header || null}
            <Content ref={mainContent}>{children}</Content>
        </>
    );
};
