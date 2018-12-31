import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Layout from '../Layout/Layout';
import SEO from '../SEO';
import styles from './Post.module.css';

export default function Post(props) {
  const post = props.data.markdownRemark;
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const { previous, next, slug } = props.pageContext;

  return (
    <Layout className={styles.layout}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.spoiler}
        slug={post.fields.slug}
      />

      <p className={styles.details}>
        {post.frontmatter.date} — {post.timeToRead} min. read
      </p>

      <h1 className={styles.title}>{post.frontmatter.title}</h1>

      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.html }} />

      {/* <footer>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </footer> */}
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
      }
      fields {
        slug
      }
    }
  }
`;
