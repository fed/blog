import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import SEO from '../components/SEO';
import Grid from '../components/Grid/Grid';
import Archive from '../components/Archive/Archive';
import categories from '../data/categories';
import externalPosts from '../data/external-posts';

function sortPostsByDateDesc(postA, postB) {
   const dateA = new Date(postA.date);
   const dateB = new Date(postB.date);

   return dateA > dateB ? -1 : 1;
}

export default function BlogIndexTemplate(props) {
    const posts = get(props, 'data.allMarkdownRemark.edges').map(post => ({
        title: get(post, 'node.frontmatter.title'),
        slug: get(post, 'node.fields.slug'),
        spoiler: get(post, 'node.frontmatter.spoiler'),
        date: get(post, 'node.frontmatter.date'),
        timeToRead: get(post, 'node.timeToRead')
    })).concat(externalPosts).sort(sortPostsByDateDesc);

    return (
        <Fragment>
            <SEO />
            <Grid>
                <Archive posts={posts} />
            </Grid>
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
