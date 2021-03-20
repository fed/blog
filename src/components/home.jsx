import React, { Fragment, useRef } from 'react';
import styled from 'styled-components';

import { socialLinks } from '../data';
import { fontFamilySansSerif, sizeContainerLarge, sizeContainerExtraLarge } from '../styles/mixins';
import { Footer } from './footer';
import { Hero } from './hero';
import { Social } from './social';

const Container = styled.div`
    padding: 32px 0;
    @media (min-width: ${sizeContainerLarge}) {
        align-content: space-between;
        display: flex;
        padding: 64px;
    }
    @media (min-width: ${sizeContainerExtraLarge}) {
        margin: 0 auto;
        max-width: 1500px;
        padding: 64px 92px;
    }
`;

const Header = styled.header`
    @media (min-width: ${sizeContainerLarge}) {
        padding: 0 30px 0 0;
        width: 40%;
    }
    @media (min-width: ${sizeContainerExtraLarge}) {
        width: 30%;
    }
`;

const Content = styled.main`
    @media (min-width: ${sizeContainerLarge}) {
        display: flex;
        justify-content: flex-end;
        padding: 0 0 0 30px;
        width: 60%;
    }

    @media (min-width: ${sizeContainerExtraLarge}) {
        width: 70%;
    }
`;

const SkipToMainContentButton = styled.button`
    font-family: ${fontFamilySansSerif};
    background-color: #dc2a5f;
    border: 1px solid #ccc;
    color: #fff;
    height: 50px;
    left: 0;
    position: fixed;
    top: 0;
    transform: translateY(-50px);
    :focus {
        transform: translateY(0);
    }
`;

export function Home(props) {
    const mainContent = useRef(null);
    const handleButtonClick = () => {
        mainContent.current.querySelector('a').focus();
    };

    return (
        <Fragment>
            <SkipToMainContentButton type="button" onClick={handleButtonClick}>
                Skip to main content
            </SkipToMainContentButton>
            <Container>
                <Header>
                    <Hero />
                    <Social links={socialLinks} />
                </Header>
                <Content ref={mainContent} aria-label="Blog posts">
                    {props.children}
                </Content>
            </Container>
            <Footer links={socialLinks} />
        </Fragment>
    );
}
