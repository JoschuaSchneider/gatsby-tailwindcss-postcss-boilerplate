import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="mb-2 text-lg font-semibold">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h1 className="mt-4 mb-2 text-lg font-semibold">TailwindCSS</h1>
    <p>Edit the span tailwind.config.js to your own liking.</p>
    <h1 className="mt-4 mb-2 text-lg font-semibold text-red-600">Help, my styles break in production!</h1>
    <p>
      Check advanced PurgeCSS config to whitelist classes or configure the matching of classes.
      Check the <a className="font-semibold text-blue-800 hover:underline" href="https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/#help-purgecss-breaks-my-site">gatsby-plugin-purgecss</a> docs for more info.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/" className="font-semibold text-blue-800 hover:underline">Go to page 2</Link>
  </Layout>
)

export default IndexPage
