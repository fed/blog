import React from 'react';
import styled from 'styled-components';

import {
    baseHeadingStyles,
    baseLinkStyles,
    baseParagraphStyles,
    baseTitleStyles,
} from '../styles/mixins';
import { Metadata } from './metadata';

const Header = styled.header`
    margin-bottom: 36px;
`;

const Title = styled.h1`
    ${baseTitleStyles};
    margin-bottom: 14px;
`;

const Content = styled.div`
    p,
    ul,
    ol {
        ${baseParagraphStyles};
    }

    a:not(.gatsby-resp-image-link) {
        ${baseLinkStyles};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        ${baseHeadingStyles};
        font-weight: 600;
        margin: 50px 0 0;
    }

    img {
        max-width: 100%;
    }

    blockquote {
        background-color: rgb(222, 235, 255);
        border-radius: 3px;
        padding: 8px 16px;
        margin: 0;

        p {
            font-size: 16px;
            font-weight: 400;
            margin: 0;
        }
    }

    // Code blocks
    .gatsby-highlight {
        margin: 25px 0;
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
            <Metadata date={date} categoryTitle={category} timeToRead={timeToRead} />
        </Header>
        <Content dangerouslySetInnerHTML={{ __html: body }} />
    </article>
);
