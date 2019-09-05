import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HowItWorksPage from "../views/howItWorksPage"

const HowItWorks = () => (
  <Layout activeLink="how-it-works">
    <SEO title="How It Works" />
    <HowItWorksPage />
  </Layout>
)

export default HowItWorks
