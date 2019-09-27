import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import SEO from '../components/SEO';
import Hero from '../components/Hero/Hero';
import Content from '../components/Content/Content';
import Social from '../components/Social/Social';
import Footer from '../components/Footer/Footer';
import social from '../data/social';
import categories from '../data/categories';

export default function BlogIndexTemplate(props) {
    const title = get(props, 'data.site.siteMetadata.title');
    const posts = get(props, 'data.allMarkdownRemark.edges').map(post => ({
        title: get(post, 'node.frontmatter.title'),
        slug: get(post, 'node.fields.slug'),
        spoiler: get(post, 'node.frontmatter.spoiler'),
        date: get(post, 'node.frontmatter.date'),
        timeToRead: get(post, 'node.timeToRead'),
        categoryId: get(post, 'node.frontmatter.category')
    }));
    const categoriesWithPosts = categories.map(category => Object.assign({}, category, {
        posts: posts.filter(post => post.categoryId === category.id)
    }));

    return (
        <Fragment>
            <SEO />
            <Hero title={title} />
            <Social links={social} />
            <Content categories={categoriesWithPosts} />
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
