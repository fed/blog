const rssPostQuery = `
{
  allMarkdownRemark(
    sort: { order: DESC, fields: [fileAbsolutePath] },
    filter: { fields: { slug: { regex: "/blog/" } } }
  ) {
    edges {
      node {
        html
        fields { slug }
        frontmatter {
          title
          spoiler
          date(formatString: "MMMM DD, YYYY")
          draft
        }
      }
    }
  }
}
`;

const createRssPost = (edge, site) => {
    const url = site.siteMetadata.siteUrl + edge.node.fields.slug;

    return {
        ...edge.node.frontmatter,
        description: edge.node.frontmatter.spoiler,
        date: edge.node.frontmatter.date,
        url,
        guid: url,
        custom_elements: [{ 'content:encoded': edge.node.html }],
    };
};

const SITE_TITLE = 'Federico Knüssel';

const SITE_DESCRIPTION = "Federico Knüssel's personal blog";

module.exports = {
    siteMetadata: {
        title: SITE_TITLE,
        author: SITE_TITLE,
        description: SITE_DESCRIPTION,
        siteUrl: 'https://fedknu.com',
        social: {
            twitter: '@fedknu',
        },
    },
    pathPrefix: '/',
    plugins: [
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: SITE_TITLE,
                short_name: 'F. Knüssel',
                start_url: '/',
                background_color: '#1b1b1b',
                theme_color: '#f3c868',
                display: 'minimal-ui',
                icon: 'static/favicon.png',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 590,
                            showCaptions: true,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-vscode',
                    },
                    {
                        resolve: 'gatsby-remark-embedder',
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-feed',
            options: {
                feeds: [
                    {
                        // Make sure to filter out drafts from the feed
                        serialize: ({ query: { site, allMarkdownRemark } }) =>
                            allMarkdownRemark.edges.filter((e) => !e.node.frontmatter.draft).map((e) => createRssPost(e, site)),
                        query: rssPostQuery,
                        output: '/rss.xml',
                        title: SITE_TITLE,
                        description: SITE_DESCRIPTION,
                    },
                ],
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-vanilla-extract',
        'gatsby-plugin-graphql-codegen',
    ],
};
