import type { ReactNode } from 'react';
import React, { useRef } from 'react';
import styled from 'styled-components';

import { colors, containerDimensions, fontFamilies } from '../styles/constants';
import { Navigation } from './navigation';

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

const Content = styled.main`
    margin: 0 auto;
    max-width: ${containerDimensions.lg};
    padding: 36px 25px 48px;
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
