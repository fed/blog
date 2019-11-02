import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import SEO from '../components/SEO';
import Content from '../components/Content/Content';
import categories from '../data/categories';
import externalPosts from '../data/external-posts';

export default function BlogArchiveTemplate(props) {
    const posts = get(props, 'data.allMarkdownRemark.edges').map(post => ({
        title: get(post, 'node.frontmatter.title'),
        slug: get(post, 'node.fields.slug'),
        spoiler: get(post, 'node.frontmatter.spoiler'),
        date: get(post, 'node.frontmatter.date'),
        timeToRead: get(post, 'node.timeToRead'),
        categoryId: get(post, 'node.frontmatter.category')
    })).concat(externalPosts);
    const categoriesWithPosts = categories.map(category => Object.assign({}, category, {
        posts: posts.filter(post => post.categoryId === category.id)
    }));

    return (
        <Fragment>
            <SEO />
            <Content categories={categoriesWithPosts} />
        </Fragment>
    );
}

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
            edges {
                node {
                    fields {
                        slug
                    }
                    timeToRead
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        spoiler
                        category
                    }
                }
            }
        }
    }
`;
