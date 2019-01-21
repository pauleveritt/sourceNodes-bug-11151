import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function PostTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>Post: {frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <h2>Author</h2>
          <p><Link to={frontmatter.author.frontmatter.path}>{frontmatter.author.frontmatter.title}</Link></p>
          <h2>Topics</h2>
          <ul>
            <li>
              <Link to={frontmatter.topics[0].frontmatter.path}>{frontmatter.topics[0].frontmatter.title}</Link>
            </li>
          </ul>

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
        topics {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
