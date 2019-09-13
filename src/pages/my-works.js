import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MyWorksPage from "../views/myWorksPage"

const MyWorks = () => (
  <Layout activeLink="my-works">
    <SEO title="My Works" />
    <MyWorksPage />
  </Layout>
)

export default MyWorks
