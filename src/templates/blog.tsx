import { graphql } from 'gatsby';
import React from 'react';

import type { Query } from '../../graphql-types';
import { Layout } from '../ui/layout';
import { Post } from '../ui/post';
import { SEO } from '../ui/seo';
import { CategoryId } from '../ui/types';

interface Props {
    data: Query;
}

const BlogTemplate: React.FC<Props> = ({ data }) => {
    const { frontmatter, fields, html } = data.markdownRemark;

    return (
        <>
            <SEO title={frontmatter.title} description={frontmatter.spoiler} slug={fields.slug} />
            <Layout>
                <Post
                    title={frontmatter.title}
                    date={frontmatter.date}
                    categoryId={frontmatter.category as CategoryId}
                    body={html}
                />
            </Layout>
        </>
    );
};

// The name of the exported constant isn't important,
// as Gatsby looks for an exported graphql string from the file rather than a specific variable.
// Note that you can only have one page query per file.
export const query = graphql`
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

// Gatsby requires default exports for pages
export default BlogTemplate;