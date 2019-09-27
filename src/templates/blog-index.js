import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import SEO from '../components/SEO';
import Hero from '../components/Hero/Hero';
import Topics from '../components/Topics/Topics';
import Social from '../components/Social/Social';
import Footer from '../components/Footer/Footer';
import social from '../data/social';
import topics from '../data/topics';

export default function BlogIndexTemplate(props) {
    const title = get(props, 'data.site.siteMetadata.title');

    return (
        <Fragment>
            <SEO />
            <Hero title={title} />
            <Social links={social} />
            <Topics topics={topics} />
            <Footer links={social} />
        </Fragment>
    );
}

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
