import React from 'react';
import styled from 'styled-components';

import {
    baseHeadingStyles,
    baseLinkStyles,
    baseParagraphStyles,
    baseTitleStyles,
    fontFamilySansSerif,
} from '../styles/mixins';
import { PostMetadata } from './post-metadata';

const Header = styled.header`
    margin-bottom: 36px;
`;

const Title = styled.h1`
    ${baseTitleStyles};
`;

const PostMetadataWrapper = styled.div`
    margin-top: 14px;
`;

const Content = styled.div`
    p {
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
        margin: 50px 0 0;
        font-weight: 600;
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
            margin: 25px 15px;
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
            <PostMetadataWrapper>
                <PostMetadata date={date} categoryTitle={category} timeToRead={timeToRead} />
            </PostMetadataWrapper>
        </Header>
        <Content dangerouslySetInnerHTML={{ __html: body }} />
    </article>
);
