import find from 'lodash/find';
import get from 'lodash/get';
import React, { Fragment } from 'react';

import Container from '../components/container';
import Layout from '../components/layout';
import Post from '../components/post';
import SEO from '../components/seo';
import categories from '../data/categories';

export { default as pageQuery } from './blog-post.query.graphql';

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
