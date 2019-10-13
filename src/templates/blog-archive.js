import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import find from 'lodash/find';
import SEO from '../components/SEO';
import Hero from '../components/Hero/Hero';
import Archive from '../components/Archive/Archive';
import Social from '../components/Social/Social';
import Footer from '../components/Footer/Footer';
import social from '../data/social';
import categories from '../data/categories';
import externalPosts from '../data/external-posts';

const externalPostsWithCategory = externalPosts.map(post => Object.assign({}, post, {
    category: find(categories, { id: post.categoryId }).title
}));

export default function BlogIndexTemplate(props) {
    const title = get(props, 'data.site.siteMetadata.title');
    const posts = get(props, 'data.allMarkdownRemark.edges').map(post => ({
        title: get(post, 'node.frontmatter.title'),
        slug: get(post, 'node.fields.slug'),
        spoiler: get(post, 'node.frontmatter.spoiler'),
        date: get(post, 'node.frontmatter.date'),
        timeToRead: get(post, 'node.timeToRead'),
        category: find(categories, { id: get(post, 'node.frontmatter.category') }).title
    })).concat(externalPostsWithCategory);

    return (
        <Fragment>
            <SEO />
            <Hero title={title} />
            <Social links={social} />
            <Archive posts={posts} />
            <Footer links={social} />
        </Fragment>
    );
}

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
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
