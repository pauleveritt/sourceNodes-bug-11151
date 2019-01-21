const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const templates =
    {
      post: path.resolve(`src/templates/post.js`),
      author: path.resolve(`src/templates/author.js`)
    }


  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              type
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: templates[node.frontmatter.type],
        context: {}
      })
    })
  })
}
