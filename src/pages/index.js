import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <h1>Home Page</h1>
    <Link to="/hello/">Go to a blog post</Link>
  </Layout>
)

export default IndexPage
