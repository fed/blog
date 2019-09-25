import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Post from '../components/Post/Post';
import SEO from '../components/SEO';

export default function BlogPostTemplate(props) {
    const post = get(props, 'data.markdownRemark');

    return (
        <Fragment>
            <SEO
                title={get(post, 'frontmatter.title')}
                description={get(post, 'frontmatter.spoiler')}
                slug={get(post, 'fields.slug')}
            />
            <Post
                title={get(post, 'frontmatter.title')}
                body={get(post, 'html')}
                date={get(post, 'frontmatter.date')}
                timeToRead={get(post, 'timeToRead')}
            />
        </Fragment>
    );
}

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
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
