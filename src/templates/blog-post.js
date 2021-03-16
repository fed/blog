import { graphql } from 'gatsby';
import find from 'lodash/find';
import get from 'lodash/get';
import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Layout } from '../components/layout';
import { Post } from '../components/post';
import { SEO } from '../components/seo';
import { categories } from '../data';

const Container = styled.div`
    margin: 35px auto 50px;
    max-width: 832px;
    padding: 0 25px;
    @media (min-width: 1024px) {
        margin: 50px auto 75px;
    }
`;

export default function BlogPostTemplate(props) {
    const post = get(props, 'data.markdownRemark');
    const categoryId = get(post, 'frontmatter.category');
    const category = find(categories, { id: categoryId });

    return (
        <Fragment>
            <SEO
                title={get(post, 'frontmatter.title')}
                description={get(post, 'frontmatter.spoiler')}
                slug={get(post, 'fields.slug')}
            />
            <Layout>
                <Container>
                    <Post
                        title={get(post, 'frontmatter.title')}
                        body={get(post, 'html')}
                        date={get(post, 'frontmatter.date')}
                        category={category}
                        timeToRead={get(post, 'timeToRead')}
                    />
                </Container>
            </Layout>
        </Fragment>
    );
}

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            timeToRead
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                spoiler
                category
            }
            fields {
                slug
            }
        }
    }
`;
