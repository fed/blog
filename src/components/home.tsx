import React, { useRef } from 'react';
import styled from 'styled-components';

import { fontFamilySansSerif } from '../styles/mixins';
import { Layout } from './layout';

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

export const Home: React.FC = ({ children }) => {
    const mainContent = useRef(null);
    const handleButtonClick = () => {
        mainContent.current.querySelector('a').focus();
    };

    return (
        <>
            <SkipToMainContentButton type="button" onClick={handleButtonClick}>
                Skip to main content
            </SkipToMainContentButton>
            <Layout>
                <div ref={mainContent} aria-label="Blog posts">
                    {children}
                </div>
            </Layout>
        </>
    );
};
