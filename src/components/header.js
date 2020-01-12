import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="mb-5 bg-purple-900">
    <div className="max-w-4xl py-5 mx-auto">
      <h1 className="text-xl font-semibold text-white">
        <Link to="/" className="no-underline">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
