import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

interface Props {
    title?: string;
    description?: string;
    slug?: string;
    imageUrl?: string;
}

export const SEO: React.FC<Props> = ({ title, description, slug = '', imageUrl }) => {
    const data = useStaticQuery(graphql`
        query GetSiteMetadata {
            site {
                siteMetadata {
                    title
                    author
                    description
                    siteUrl
                    social {
                        twitter
                    }
                }
            }
        }
    `);
    const { siteMetadata } = data.site;
    const metaTitle = title || siteMetadata.title;
    const metaDescription = description || siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{ lang: 'en' }}
            {...(title ? { titleTemplate: `%s - ${siteMetadata.title}`, title } : { title: siteMetadata.title })}
            meta={[
                { name: 'description', content: metaDescription },
                { property: 'og:url', content: `${siteMetadata.siteUrl}${slug}` },
                { property: 'og:title', content: metaTitle },
                { name: 'og:description', content: metaDescription },
                { name: 'twitter:card', content: 'summary' },
                { name: 'twitter:creator', content: siteMetadata.social.twitter },
                { name: 'twitter:title', content: metaTitle },
                { name: 'twitter:description', content: metaDescription },
                ...(imageUrl
                    ? [
                          { property: 'og:image', content: imageUrl },
                          { name: 'twitter:image', content: imageUrl },
                      ]
                    : []),
            ]}
        />
    );
};
