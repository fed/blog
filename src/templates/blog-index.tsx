import { graphql } from 'gatsby';
import sortBy from 'lodash/sortBy';
import React from 'react';

import { Archive } from '../components/archive';
import { Home } from '../components/home';
import { SEO } from '../components/seo';
import { externalPosts } from '../data';
import type { Query } from '../../graphql-types';

interface Props {
    data: Query;
}

const BlogIndexTemplate: React.FC<Props> = ({ data }) => {
    const posts = data.allMarkdownRemark.edges
        .map((post) => ({
            title: post.node.frontmatter.title,
            slug: post.node.fields.slug,
            spoiler: post.node.frontmatter.spoiler,
            date: post.node.frontmatter.date,
            timeToRead: post.node.timeToRead,
            categoryId: post.node.frontmatter.category,
            isExternal: false,
            url: null,
        }))
        .concat(externalPosts);

    return (
        <>
            <SEO />
            <Home>
                <Archive posts={sortBy(posts, (post) => new Date(post.date)).reverse()} />
            </Home>
        </>
    );
};

// The name of the exported constant isn't important,
// as Gatsby looks for an exported graphql string from the file rather than a specific variable.
// Note that you can only have one page query per file.
export const query = graphql`
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

export default BlogIndexTemplate;
