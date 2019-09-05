import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutPage from "../views/aboutPage"

const About = () => (
  <Layout activeLink="about-me">
    <SEO title="About" />
    <AboutPage></AboutPage>
  </Layout>
)

export default About
