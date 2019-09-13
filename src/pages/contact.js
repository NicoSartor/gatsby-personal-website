import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactPage from "../views/contactPage"

const Contact = () => (
  <Layout activeLink="contact">
    <SEO title="Contact" />
    <ContactPage />
  </Layout>
)

export default Contact
