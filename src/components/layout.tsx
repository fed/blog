import React from 'react';
import styled from 'styled-components';

import { Navigation } from './navigation';

const Content = styled.main`
    margin: 0 auto;
    max-width: 832px;
    padding: 36px 25px 48px;
`;

export const Layout: React.FC = ({ children }) => (
    <>
        <Navigation />
        <Content>{children}</Content>
    </>
);
