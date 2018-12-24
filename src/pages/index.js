import React, { Fragment } from 'react';
import Hero from '../components/Hero/Hero';
import Social from '../components/Social/Social';
import Topics from '../components/Topics/Topics';
import Footer from '../components/Footer/Footer';

// Data
import topics from '../model/topics';
import social from '../model/social';

export default function LandingPage(props) {
  return (
    <Fragment>
      <Hero />
      <Social links={social} />
      <Topics topics={topics} />
      <Footer links={social} />
    </Fragment>
  );
}
