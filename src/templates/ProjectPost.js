import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default function Template ({data}) {
  const post = data.markdownRemark
  const style = {
    display: "flex",
    justifyContent: "space-between"
  }

  return(
    <Layout>
      <div id="main">
      <Link to="/">Go Back</Link>
      <div style={style}>
        <h1>{post.frontmatter.title}</h1>
        <div>
        <a href={post.frontmatter.deployedApp} target="_blank" rel="noreferrer">Deployed App</a> | <a href={post.frontmatter.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <p>{post.frontmatter.description}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html}}/>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query ProjectPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: { eq: $path} }){
      html
      frontmatter {
        path
        title
        description
        deployedApp
        github
      }
    }
  }
`