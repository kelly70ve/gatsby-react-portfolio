import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

export default function Template ({data}) {
  const post = data.markdownRemark
  
  return(
    <div>
      <Link to="/">Go Back</Link>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html}}/>
    </div>
  )
}

export const postQuery = graphql`
  query ProjectPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: { eq: $path} }){
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`