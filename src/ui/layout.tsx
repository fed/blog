import React from 'react';
import styled from 'styled-components';

import { Navigation } from './navigation';
import { colors, containerDimensions, fontFamilies, gridSize } from '../styles/constants';

const SkipLink = styled.a`
    align-items: center;
    background-color: ${colors.pink};
    color: ${colors.white};
    display: flex;
    font-family: ${fontFamilies.sansSerif};
    height: ${6.25 * gridSize}px;
    left: 0;
    padding: 0 15px;
    position: fixed;
    text-decoration: none;
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

export const Layout: React.FC = ({ children }) => (
    <>
        <SkipLink href="#main" data-testid="layout-skip-link">
            Skip to main content
        </SkipLink>
        <Navigation />
        <Content id="main" data-testid="layout-content">
            {children}
        </Content>
    </>
);
