import React from 'react';
import styled from 'styled-components';

import {
    baseLinkStyles,
    baseParagraphStyles,
    baseTitleStyles,
    fontFamilySansSerif,
} from '../styles/mixins';
import { PostMetadata } from './post-metadata';

const Header = styled.header`
    @media (min-width: 768px) {
        margin-bottom: 36px;
    }
`;

const Title = styled.h1`
    ${baseTitleStyles};
    font-size: 26px;
    font-weight: 750;
    @media (min-width: 768px) {
        font-size: 36px;
    }
`;

const PostDetailsWrapper = styled.div`
    margin-top: 12px;
`;

const Content = styled.div`
    ${baseParagraphStyles};
    a:not(.gatsby-resp-image-link) {
        ${baseLinkStyles};
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${fontFamilySansSerif};
        font-weight: 700;
        line-height: 1.35;
        margin: 50px 0 25px;
    }
    img {
        max-width: 100%;
    }
    figcaption {
        font-family: ${fontFamilySansSerif};
    }
    blockquote {
        border-left: 4px solid #ccc;
        font-style: italic;
        p {
            margin: 45px 15px;
        }
    }
    .gatsby-highlight {
        margin: 40px 0;
    }
`;

interface Props {
    title: string;
    date: string;
    category: string;
    timeToRead: number;
    body: string;
}

export const Post: React.FC<Props> = ({ title, date, category, timeToRead, body }) => (
    <article>
        <Header>
            <Title>{title}</Title>
            <PostDetailsWrapper>
                <PostMetadata date={date} categoryTitle={category} timeToRead={timeToRead} />
            </PostDetailsWrapper>
        </Header>
        <Content dangerouslySetInnerHTML={{ __html: body }} />
    </article>
);
