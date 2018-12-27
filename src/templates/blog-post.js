import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import noop from 'lodash/noop';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const GITHUB_USERNAME = 'gaearon';
const GITHUB_REPO_NAME = 'overreacted.io';

const rhythm = noop;
const scale = noop;

function BlogPostTemplate(props) {
  const post = props.data.markdownRemark;
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const { previous, next, slug } = props.pageContext;
  const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/src/pages/${slug.replace(
    /\//g,
    ''
  )}.md`;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.spoiler}
        slug={post.fields.slug}
      />

      <h1>{post.frontmatter.title}</h1>

      <p>
        {post.frontmatter.date} - {post.timeToRead}
      </p>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />

      <p>
        <a href={editUrl} target="_blank" rel="noopener noreferrer">
          {' '}
          Edit on GitHub{' '}
        </a>
      </p>

      <hr />

      <h3>
        <Link to={'/'}>Overreacted</Link>
      </h3>

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
    </Layout>
  );
}

export default BlogPostTemplate;

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
