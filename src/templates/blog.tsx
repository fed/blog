import { graphql } from 'gatsby';
import React from 'react';

import type { Query } from '../../graphql-types';
import { CategoryId } from '../model/categories';
import { Article } from '../ui/article';
import { Layout } from '../ui/layout';
import { SEO } from '../ui/seo';

interface Props {
    data: Query;
}

// The Blog template is used by both blog posts and static pages since we share the same UI.
const BlogTemplate: React.FunctionComponent<Props> = ({ data }) => {
    const { frontmatter, fields, html } = data.markdownRemark;
    const isBlogPost = fields.slug.startsWith('/blog/');

    return (
        <>
            <SEO title={frontmatter.metaTitle || frontmatter.title} description={frontmatter.spoiler} slug={fields.slug} />
            <Layout>
                <Article
                    title={frontmatter.title}
                    date={frontmatter.date}
                    datetime={frontmatter.datetime}
                    categoryId={frontmatter.category as CategoryId}
                    isBlogPost={isBlogPost}
                >
                    {html}
                </Article>
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
            frontmatter {
                title
                metaTitle
                spoiler
                date(formatString: "MMMM DD, YYYY")
                datetime: date
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
