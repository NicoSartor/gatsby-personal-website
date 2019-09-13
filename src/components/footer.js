import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import siteLinks from "../config/siteLinks"

const FooterContainer = styled.footer`
  display: flex;
  background: black;
  color: white;
  min-height: 120px;
  padding: 40px 40px 5px 40px;
  flex-direction: column;
`
const CopyRightText = styled.p`
  font-size: 11px;
  text-align: center;
  width: 100%;
  opacity: 0.5;
`
const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 12px;
  flex-wrap: wrap;
  @media (max-width: 1280px) {
    justify-content: left;
  }
`

const ContentWrap = styled.div`
  width: 20%;
  min-width: 200px;
  min-height: 100px;
  margin: 5px;
`

const SectionTitle = styled.h2`
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 2px;
  border: 1px solid white;
  padding: 3px 5px;
  display: inline-block;
  margin-bottom: 10px;
  opacity: 0.6;
`

const LinkText = styled.p`
  /* font-size: 13px; */
  text-transform: capitalize;
  padding: 3px;
  margin: 3px 0;
  display: inline-block;
  transition: all 0.2s;
  &:hover {
    background: white;
    color: black;
  }
`

const Block = styled.div`
  display: block;
`

const NavigationSection = () => {
  return (
    <ContentWrap>
      <SectionTitle>Site Navigation</SectionTitle>
      {siteLinks.links.map(link => {
        if (link.disabled) {
          return
        }
        return (
          <Block>
            <Link
              to={link.path}
              style={{ textDecoration: "none", color: "white" }}
            >
              <LinkText>{link.name}</LinkText>
            </Link>
          </Block>
        )
      })}
    </ContentWrap>
  )
}

const ResourcesSection = () => {
  return (
    <ContentWrap>
      <SectionTitle>Resources</SectionTitle>
      <Block>
        <LinkText>Coming Soon</LinkText>
      </Block>
    </ContentWrap>
  )
}

const SocialSection = () => {
  return (
    <ContentWrap>
      <SectionTitle>Social</SectionTitle>
      <Block>
        <a
          hreaf="https://www.linkedin.com/in/nicolas-sartor-13604370/"
          style={{ textDecoration: "none", color: "white" }}
        >
          <LinkText>Linkedin</LinkText>
        </a>
      </Block>
    </ContentWrap>
  )
}

function Footer({ siteName }) {
  return (
    <FooterContainer className="footer-container">
      <ContentContainer>
        <ContentWrap>
          <Block>Phone Number: (323) 614-5568</Block>
          <Block>Email: nkaosartor@gmail.com</Block>
        </ContentWrap>
        <NavigationSection />
        <ResourcesSection />
        <SocialSection />
      </ContentContainer>
      <CopyRightText>
        © {new Date().getFullYear()} {siteName} - Developed by Nicolas Kao
        Sartor
      </CopyRightText>
    </FooterContainer>
  )
}

export default Footer
