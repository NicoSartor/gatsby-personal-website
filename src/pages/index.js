import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HomePage from "../views/homePage"

const IndexPage = () => (
  <Layout navColor="white" activeLink="home">
    <SEO title="Home" />
    <HomePage></HomePage>
  </Layout>
)

export default IndexPage
