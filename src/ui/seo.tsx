import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

type Meta = { name: string; content: string } | { property: string; content: string };

interface Props {
    description?: string;
    image?: string;
    meta?: Meta[];
    slug?: string;
    title?: string;
}

export const SEO: React.FC<Props> = ({ meta = [], image, title, description, slug }) => {
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
    const metaDescription = description || siteMetadata.description;
    const metaImage = image ? `${siteMetadata.siteUrl}/${image}` : null;
    const url = `${siteMetadata.siteUrl}${slug}`;

    return (
        <Helmet
            htmlAttributes={{ lang: 'en' }}
            {...(title ? { titleTemplate: `%s - ${siteMetadata.title}`, title } : { title: siteMetadata.title })}
            meta={[
                { name: 'description', content: metaDescription },
                { property: 'og:url', content: url },
                { property: 'og:title', content: title || siteMetadata.title },
                { name: 'og:description', content: metaDescription },
                { name: 'twitter:card', content: 'summary' },
                { name: 'twitter:creator', content: siteMetadata.social.twitter },
                { name: 'twitter:title', content: title || siteMetadata.title },
                { name: 'twitter:description', content: metaDescription },
                ...(metaImage
                    ? [
                          { property: 'og:image', content: metaImage },
                          { name: 'twitter:image', content: metaImage },
                      ]
                    : []),
                ...meta,
            ]}
        />
    );
};
