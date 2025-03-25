/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');

const Promise = require('bluebird');
const { createFilePath } = require('gatsby-source-filesystem');
const _ = require('lodash');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        const IndexTemplate = path.resolve('./src/templates/index.tsx');
        const BlogTemplate = path.resolve('./src/templates/blog.tsx');

        createPage({
            path: '/',
            component: IndexTemplate,
        });

        resolve(
            graphql(`
                {
                    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1000) {
                        edges {
                            node {
                                fields {
                                    slug
                                }
                                frontmatter {
                                    title
                                    draft
                                }
                            }
                        }
                    }
                }
            `).then((result) => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors);
                }

                // We don't want to build pages for the drafts until they are ready to be published
                const markdownFiles = _.filter(result.data.allMarkdownRemark.edges, (file) => !file.node.frontmatter.draft);

                _.each(markdownFiles, (file) => {
                    const { slug } = file.node.fields;

                    createPage({
                        path: slug,
                        component: BlogTemplate,
                        context: {
                            slug,
                        },
                    });
                });
            }),
        );
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        const value = createFilePath({ node, getNode });

        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};
