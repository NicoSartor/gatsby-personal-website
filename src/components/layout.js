/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

import windowUtils from "../utils/windowUtils"

const MainWrap = styled.main`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
`

const Layout = ({ children, activeLink, navColor }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    //console.log(windowUtils.isMobile())
  }, [])

  return (
    <>
      <Header
        activeLink={activeLink}
        siteTitle={data.site.siteMetadata.title}
        color={navColor}
      />
      <div id="outer-container" style={{ height: "100%" }}>
        <MainWrap id="page-wrap">{children}</MainWrap>

        <Footer siteName={data.site.siteMetadata.title} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
