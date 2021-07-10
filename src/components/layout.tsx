import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { Footer } from './footer';
import { Header } from './header';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #fafafac9;
  }
`;

const Container = styled.div`
    background-color: #fff;
`;

const Content = styled.main`
    margin: 35px auto 60px;
    max-width: 832px;
    padding: 0 25px;
`;

export const Layout: React.FC = ({ children }) => (
    <>
        <GlobalStyles />
        <Container>
            <Header />
            <Content>{children}</Content>
            <Footer />
        </Container>
    </>
);
