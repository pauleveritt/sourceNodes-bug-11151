import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function PostTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const author = frontmatter.author.frontmatter
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>Post: {frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <p>Author:
            <Link to={author.path}>{author.title}</Link>
          </p>
        </div>
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
        author {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
