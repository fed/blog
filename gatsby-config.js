module.exports = {
    siteMetadata: {
        title: 'Federico Knüssel',
        author: 'Federico Knüssel',
        description: "Federico Knüssel's personal blog",
        siteUrl: 'https://fedknu.com',
        social: {
            twitter: '@fknussel',
        },
    },
    pathPrefix: '/',
    plugins: [
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Federico Knüssel',
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
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-graphql-codegen',
    ],
};
