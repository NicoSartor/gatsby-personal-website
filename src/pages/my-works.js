import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HowItWorksPage from "../views/howItWorksPage"

const HowItWorks = () => (
  <Layout activeLink="my-works">
    <SEO title="My Works" />
    <HowItWorksPage />
  </Layout>
)

export default HowItWorks
