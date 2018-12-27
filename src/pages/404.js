import React from 'react';
import Layout from '../components/Layout';

export default function NotFoundPage() {
  return (
    <Layout location={props.location}>
      <h1>Not Found</h1>
      <p>Haven't written this post yet.</p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6IJB0aD8gSA"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
      />
    </Layout>
  );
}
