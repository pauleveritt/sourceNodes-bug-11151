module.exports = {
  mapping: {
    'MarkdownRemark.frontmatter.author': `MarkdownRemark.frontmatter.author_label`,
    'MarkdownRemark.frontmatter.topics': `MarkdownRemark.frontmatter.topic_label`,
  },
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
  ],
}
