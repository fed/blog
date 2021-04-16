import { Link as UnstyledGatsbyLink } from 'gatsby';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { avatarUrl } from '../data';
import { baseFocusStateStyles, fontFamilySansSerif } from '../styles/mixins';
import { Footer } from './footer';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #fafafac9;
  }
`;

const Container = styled.div`
    background-color: #fff;
`;

const Header = styled.header`
    background-color: #fafafac9;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

const HeaderContent = styled.div`
    padding: 18px 25px;
    @media (min-width: 768px) {
        margin: 0 auto;
        max-width: 832px;
    }
`;

const Link = styled(UnstyledGatsbyLink)`
    ${baseFocusStateStyles};
    align-items: center;
    color: #333;
    display: flex;
    font-family: ${fontFamilySansSerif};
    font-size: 22px;
    font-weight: 700;
    text-decoration: none;
    width: max-content;
`;

const Avatar = styled.img`
    border-radius: 50%;
    height: 35px;
    margin-right: 15px;
    width: 35px;
`;

const Content = styled.main`
    margin: 50px auto 75px;
    max-width: 832px;
    padding: 0 25px;
`;

interface Props {
    children?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => (
    <>
        <GlobalStyles />
        <Container>
            <Header>
                <HeaderContent>
                    <Link to="/">
                        <Avatar src={avatarUrl} alt="" />
                        F. Knüssel
                    </Link>
                </HeaderContent>
            </Header>
            <Content>{children}</Content>
            <Footer />
        </Container>
    </>
);
