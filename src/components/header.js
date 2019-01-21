import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          marginRight: '2em',
        }}
      >
        {siteTitle}
      </Link>
      <Link
        to={`/blog/hello`}
        style={{
          color: `white`,
          textDecoration: `none`,
          marginRight: '2em',
        }}
      >First Blog Post</Link>
      <Link
        to={`/authors/author1`}
        style={{
          color: `white`,
          textDecoration: `none`,
          marginRight: '2em',
        }}
      >Author One</Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
