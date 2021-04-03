import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import Masonry from '../components/Masonry';
import { graphql } from 'gatsby';

export default function Template({ data }) {
  const post = data.markdownRemark;
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <Layout>
      <div id="main">
        <Masonry photos={post.frontmatter.photos} />
      </div>
    </Layout>
  );
}

export const postQuery = graphql`
  query PhotoPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
        deployedApp
        github
        photos {
          src
          height
          width
        }
      }
    }
  }
`;
