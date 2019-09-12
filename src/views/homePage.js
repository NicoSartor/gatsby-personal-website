import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { PageSubtitle, Text } from "../components/globalStyles"
import Myself from "../images/Myself.png"

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
`

const LeftSide = styled.div`
  height: 100%;
  background: #0d282f;
  width: 60%;
  padding: 36px 80px;
  box-sizing: border-box;
`

const RightSide = styled.div`
  height: 100%;
  background: #dae0e0;
  width: 40%;
  box-sizing: border-box;
`

const TitleWrap = styled.div``

const SiteTitle = styled.h1`
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 300;
  color: white;
`
const Subtitle = styled.h2`
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 300;
  opacity: 0.3;
  font-size: 20px;
  color: white;
`

const SkillsWraper = styled.div`
  margin-top: 80px;
  max-width: 700px;
  border-left: 3px solid goldenrod;
  padding-left: 10px;
`

const Skills = () => (
  <SkillsWraper>
    <PageSubtitle align="left" color="white">
      Specialization Stack:
    </PageSubtitle>
    <Text align="left" color="white">
      React, Node, Express, MongoDB
    </Text>
    <PageSubtitle align="left" color="white">
      Skills:
    </PageSubtitle>
    <Text align="left" color="white">
      Agile Scrum (Certified Scrum Master), Clean Architecture, SEO, Project
      Management, App Deployment, Google Tag Manager
    </Text>
    <PageSubtitle align="left" color="white">
      Other Tecnologies:
    </PageSubtitle>
    <Text align="left" color="white">
      Gatsby, React Native, Python, Canvas, JWT, Testing (Jest, Mocha, Chai,
      Cypress), Sockets.io
    </Text>
    <PageSubtitle align="left" color="white">
      Experience with Production APIs:
    </PageSubtitle>
    <Text align="left" color="white">
      Stripe, Instagram, Google, Unsplash, Pexels
    </Text>
  </SkillsWraper>
)

const IntroWrap = styled.div`
  /* max-width: 700px; */
  margin-top: 100px;
  display: flex;
`

const MyImage = styled.div`
  background-image: url(${Myself});
  width: 200px;
  height: 200px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 10px;
  @media (max-width: 1250px) {
    margin: 10px auto;
  }
`

const IntroTextWrap = styled.div`
  max-width: 500px;
`

const IntroSection = styled.div`
  margin-top: 30px;
  padding: 5px;
  border: 1px solid white;
  width: 300px;
  cursor: pointer;
  color: white;
  transition: background 0.4s;
  &:hover {
    background: white;
    color: #0d282f;
  }
`
const ButtonText = styled.p`
  line-height: 1.889;
  letter-spacing: 1.3px;
  text-align: ${props => (props.align ? props.align : "center")};
`

const Intro = () => (
  <IntroWrap>
    <MyImage></MyImage>
    <IntroTextWrap>
      <PageSubtitle align="left" color="white" marginTop="2px">
        I'm not an average engineer.
      </PageSubtitle>
      <Text align="left" color="white">
        I have solved multiple high complexity problems and built many front-end
        and backend features for a product used by over 10 million people.
      </Text>
      <IntroSection>
        <Link
          to={"/my-works"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ButtonText>Learn more about my work here.</ButtonText>
        </Link>
      </IntroSection>
    </IntroTextWrap>
  </IntroWrap>
)

const ReferencesWrap = styled.div`
  margin-top: 150px;
`

const References = () => (
  <ReferencesWrap>
    <PageSubtitle>What ohers say about me</PageSubtitle>
  </ReferencesWrap>
)

function HomePage() {
  return (
    <Container>
      <LeftSide>
        <TitleWrap>
          <SiteTitle>Nicolas Kao Sartor</SiteTitle>
          <Subtitle>Full Stack Engineer</Subtitle>
        </TitleWrap>
        <Intro />
        <Skills />
      </LeftSide>
      <RightSide>
        <References />
      </RightSide>
    </Container>
  )
}

export default HomePage
