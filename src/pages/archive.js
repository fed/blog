import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';

export default function BlogIndex(props) {
    const siteTitle = get(props, 'data.site.siteMetadata.title');
    const siteDescription = get(props, 'data.site.siteMetadata.description');
    const posts = get(props, 'data.allMarkdownRemark.edges');

    return (
        <Layout>
            <SEO />

            {posts.map(({ node }) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug;
                return (
                    <div key={node.fields.slug}>
                        <Link to={node.fields.slug}>{title}</Link> -- {node.frontmatter.date}
                    </div>
                );
            })}
        </Layout>
    );
}

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    fields {
                        slug
                    }
                    timeToRead
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                    }
                }
            }
        }
    }
`;
