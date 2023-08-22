import { graphql } from 'gatsby';
import sortBy from 'lodash/sortBy';
import React from 'react';

import type { Query } from '../../graphql-types';
import { Archive } from '../ui/archive';
import { Layout } from '../ui/layout';
import { SEO } from '../ui/seo';
import { CategoryId } from '../ui/types';

interface Props {
    data: Query;
}

const IndexTemplate: React.FunctionComponent<Props> = ({ data }) => {
    const posts = data.allMarkdownRemark.edges
        // Make sure to filter out static pages and drafts from this list
        .filter((post) => post.node.frontmatter.draft !== true && post.node.fields.slug.includes('blog/'))
        .map((post) => ({
            id: post.node.id,
            title: post.node.frontmatter.title,
            slug: post.node.fields.slug,
            spoiler: post.node.frontmatter.spoiler,
            date: post.node.frontmatter.date,
            categoryId: post.node.frontmatter.category as CategoryId,
        }));

    return (
        <>
            <SEO />
            <Layout>
                <Archive posts={sortBy(posts, (post) => new Date(post.date)).reverse()} />
            </Layout>
        </>
    );
};

// The name of the exported constant isn't important,
// as Gatsby looks for an exported graphql string from the file rather than a specific variable.
// Note that you can only have one page query per file.
export const query = graphql`
    query AllBlogPosts {
        allMarkdownRemark(sort: { frontmatter: { date: ASC } }) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        spoiler
                        category
                        draft
                    }
                }
            }
        }
    }
`;

// Gatsby requires default exports for pages
export default IndexTemplate;
