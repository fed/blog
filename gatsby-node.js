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
            graphql(
                `
                    {
                        allMarkdownRemark(
                            sort: { fields: [frontmatter___date], order: DESC }
                            limit: 1000
                        ) {
                            edges {
                                node {
                                    fields {
                                        slug
                                    }
                                    frontmatter {
                                        title
                                    }
                                }
                            }
                        }
                    }
                `,
            ).then((result) => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors);
                }

                const markdownFiles = result.data.allMarkdownRemark.edges;

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

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};
