import { graphql } from 'gatsby';
import React from 'react';

import type { Query } from '../../graphql-types';
import { Layout } from '../ui/layout';
import { Page } from '../ui/page';
import { SEO } from '../ui/seo';

interface Props {
    data: Query;
}

const PageTemplate: React.FC<Props> = ({ data }) => {
    const page = data.markdownRemark;

    return (
        <>
            <SEO title={page.frontmatter.title} />
            <Layout>
                <Page title={page.frontmatter.title}>{page.html}</Page>
            </Layout>
        </>
    );
};

// The name of the exported constant isn't important,
// as Gatsby looks for an exported graphql string from the file rather than a specific variable.
// Note that you can only have one page query per file.
export const query = graphql`
    query PageBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            frontmatter {
                title
            }
            fields {
                slug
            }
        }
    }
`;

// Gatsby requires default exports for pages
export default PageTemplate;
