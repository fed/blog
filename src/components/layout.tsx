import React from 'react';
import styled from 'styled-components';

import { Navigation } from './navigation';

const Container = styled.div`
    background-color: #fff;
`;

const Content = styled.main`
    margin: 50px auto 60px;
    max-width: 832px;
    padding: 0 25px;
`;

export const Layout: React.FC = ({ children }) => (
    <Container>
        <Navigation />
        <Content>{children}</Content>
    </Container>
);
