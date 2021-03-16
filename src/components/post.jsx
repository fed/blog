import React from 'react';
import styled from 'styled-components';

import {
    baseParagraphStyles,
    baseTitleStyles,
    baseLinkStyles,
    baseSansSerifStyles,
} from '../styles/mixins';
import { PostDetails } from './post-details';

const Header = styled.header`
    @media (min-width: 768px) {
        margin-bottom: 50px;
    }
`;

const Title = styled.h1`
    ${baseTitleStyles};
    font-size: 32px;
    font-weight: 900;
    @media (min-width: 768px) {
        font-size: 45px;
    }
`;

const PostDetailsWrapper = styled.div`
    margin-top: 16px;
`;

const Content = styled.div`
    ${baseParagraphStyles};
    a:not(:global(.gatsby-resp-image-link)) {
        ${baseLinkStyles};
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        ${baseSansSerifStyles};
        font-weight: 700;
        line-height: 1.35;
        margin: 50px 0 25px;
    }
    img {
        max-width: 100%;
    }
    :global(.gatsby-highlight) {
        margin: 40px 0;
    }
    blockquote {
        border-left: 4px solid #ccc;
        font-style: italic;
    }
    blockquote p {
        margin: 45px 15px;
    }
    figcaption {
        ${baseSansSerifStyles};
    }
`;

export function Post(props) {
    return (
        <article>
            <Header>
                <Title>{props.title}</Title>
                <PostDetailsWrapper>
                    <PostDetails
                        date={props.date}
                        categoryId={props.category.id}
                        categoryTitle={props.category.title}
                        timeToRead={props.timeToRead}
                    />
                </PostDetailsWrapper>
            </Header>
            <Content dangerouslySetInnerHTML={{ __html: props.body }} />
        </article>
    );
}
