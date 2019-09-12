import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HomePage from "../views/homePage"

const IndexPage = () => {
  const [width, setWidth] = useState(null)
  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
    })
  }, [])
  return (
    <Layout navColor={width < 1000 ? "white" : "black"} activeLink="home">
      <SEO title="Home" />
      <HomePage></HomePage>
    </Layout>
  )
}

export default IndexPage
