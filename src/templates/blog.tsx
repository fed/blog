import { graphql } from 'gatsby';
import React from 'react';

import type { Query } from '../../graphql-types';
import { categories } from '../data';
import { Layout } from '../ui/layout';
import { Post } from '../ui/post';
import { SEO } from '../ui/seo';

interface Props {
    data: Query;
}

const BlogTemplate: React.FC<Props> = ({ data }) => {
    const post = data.markdownRemark;
    const categoryId = post.frontmatter.category;
    const category = categories.find((c) => c.id === categoryId);

    return (
        <>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.spoiler}
                slug={post.fields.slug}
            />
            <Layout>
                <Post
                    title={post.frontmatter.title}
                    body={post.html}
                    date={post.frontmatter.date}
                    category={category.title}
                    timeToRead={post.timeToRead}
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
