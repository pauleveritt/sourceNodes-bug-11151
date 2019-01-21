import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Home Page</h1>
    <Link to="/hello/">Go to a blog post</Link>
  </Layout>
)

export default IndexPage
