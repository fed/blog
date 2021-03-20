module.exports = {
    siteMetadata: {
        title: 'Federico Knüssel',
        author: 'Federico Knüssel',
        description: 'Personal blog by Federico Knüssel',
        siteUrl: 'https://fknussel.com',
        social: {
            twitter: '@fknussel',
        },
    },
    pathPrefix: '/',
    plugins: [
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
                        resolve: 'gatsby-remark-responsive-iframe',
                        options: {
                            wrapperStyle: 'margin-bottom: 1.0725rem',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            inlineCodeMarker: '÷',
                        },
                    },
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                ],
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-103574069-1',
            },
        },
        'gatsby-plugin-feed',
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
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
    ],
};
