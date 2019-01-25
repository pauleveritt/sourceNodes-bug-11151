import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function AuthorTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>Author: {frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <h2>Posts</h2>
        <p><em>Backward refernces using <code>gatsby-config</code>
          mapping only produces on item, so skipping.</em></p>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author_label {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
