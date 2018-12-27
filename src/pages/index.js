import React, { Fragment } from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero/Hero';
import Social from '../components/Social/Social';
import Topics from '../components/Topics/Topics';
import Footer from '../components/Footer/Footer';
import { email, social, topics } from '../data';

export default function LandingPage(props) {
  return (
    <Fragment>
      <SEO />
      <Hero email={email} />
      <Social links={social} />
      <Topics topics={topics} />
      <Footer links={social} />
    </Fragment>
  );
}
