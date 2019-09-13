import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import {
  PageContainer,
  PageTitle,
  PageSubtitle,
  Text,
} from "../components/globalStyles"

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 80px;
  flex-wrap: wrap;
`

const CardWrapper = styled.div`
  width: 80%;
  padding: 20px;
  box-sizing: border-box;
  margin: 10px;
  background: white;
  min-height: 450px;
  box-shadow: 12px 20.785px 69px 0px rgba(141, 167, 199, 0.86);
  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    min-width: 300px;
    padding: 10px;
  }
`

const CardHeaderWrap = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`

const CardTitle = styled.h2`
  margin: 10px 0;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`

const ProjectTitle = styled.p`
  font-size: 30px;
  font-weight: 400;
  margin: 0 10px;
  padding-left: 20px;
  border-left: 3px solid goldenrod;
  @media (max-width: 500px) {
    margin: 0 10px;
    padding-left: 10px;
  }
`

const IconWrap = styled.div`
  margin: 30px auto;
  width: 60px;
`

//Make a slider
// const Cards = [<CardOne />, <CardTwo />, <CardThree />]

export default function MyWorksPage() {
  return (
    <PageContainer>
      <PageTitle>My Works</PageTitle>

      <CardsContainer>
        <UnumWebApp />
        <UnumWebsite />
        <RocketFinder />
      </CardsContainer>
    </PageContainer>
  )
}

const CardContentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 500px) {
  }
`

const CardSubTitle = styled.h2`
  letter-spacing: 1.2px;
`

const ProjectDemoWrap = styled.div`
  margin: 10px auto;
  width: 90%;
  text-align: center;
  height: 500px;
  @media (max-width: 1200px) {
    height: 400px;
  }
  @media (max-width: 1000px) {
    height: 300px;
  }
`

const TextWrap = styled.div`
  margin-top: 30px;
  padding: 20px;
  width: 400px;
  @media (max-width: 1800px) {
    width: 300px;
  }
  @media (max-width: 1450px) {
    width: 100%;
  }
`

const IntroSection = styled.div`
  margin-top: 30px;
  padding: 5px;
  border: 1px solid black;
  width: 300px;
  cursor: pointer;
  color: black;
  transition: background 0.4s;
  margin: 0 auto;
  &:hover {
    background: black;
    color: white;
  }
  @media (max-width: 1280px) {
    width: 250px;
  }
`

const ButtonText = styled.p`
  line-height: 1.889;
  letter-spacing: 1.3px;
  text-align: ${props => (props.align ? props.align : "center")};
  @media (max-width: 1280px) {
    letter-spacing: 1.1px;
    font-size: 12px;
  }
`

const UnumWebApp = () => (
  <CardWrapper>
    <CardHeaderWrap>
      <ProjectTitle>Unum Web App</ProjectTitle>
    </CardHeaderWrap>
    <ProjectDemoWrap>
      <iframe
        width="100%"
        height="100%"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        src="https://www.youtube.com/embed/zzCghas69l8"
      ></iframe>
    </ProjectDemoWrap>
    <IntroSection>
      <a
        href={"https://dashboard.unum.la/signup"}
        target="__blank"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ButtonText>Visit the live project</ButtonText>
      </a>
    </IntroSection>
    <CardContentWrap>
      <TextWrap>
        <CardSubTitle>Description</CardSubTitle>
        <Text align="left">
          UNUM is a platform for influencers to organize, schedule and create
          content. I was tasked with bringing this app to the web platform,
          initially they only had a basic prototype without many features
          besides rendering your instagram grid.
        </Text>
        <Text align="left">
          This is a very complex application, but I was able to deliver my
          solutions efficiently and always on time.
        </Text>
      </TextWrap>
      <TextWrap>
        <CardSubTitle>Front-end Solutions</CardSubTitle>
        <Text align="left">
          I recreated designs given to me with react and redux, added
          functionality and integrations. Some feature highlights are:
        </Text>
        <ul>
          <li>Sortable Grid.</li>
          <li>Drive, Dropbox, Unsplash, Pexels and Instagram Integrations.</li>
          <li>Mosaic Grid on Import Modal.</li>
        </ul>
      </TextWrap>
      <TextWrap>
        <CardSubTitle>Back-end Solutions</CardSubTitle>
        <Text align="left">
          I have built many endpoints for the platform using Node, Express and
          Mongo. The user data I worked with resembles the model of a social
          media app, with each user being able to own many posts and projects.
          Highlights:
        </Text>
        <ul>
          <li>Instagram Login.</li>
          <li>iOS Cross Authentication to Web using JWTs.</li>
          <li>iOS Story page rendering on the backend.</li>
        </ul>
      </TextWrap>
    </CardContentWrap>
  </CardWrapper>
)

const UnumWebsite = () => (
  <CardWrapper>
    <CardHeaderWrap>
      <ProjectTitle>Unum Website</ProjectTitle>
    </CardHeaderWrap>
    <ProjectDemoWrap>
      <iframe
        width="100%"
        height="100%"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        src="https://www.youtube.com/embed/lfozb0VvY80"
      ></iframe>
    </ProjectDemoWrap>
    <IntroSection>
      <a
        href={"https://unum.la"}
        target="__blank"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ButtonText>Visit the live project</ButtonText>
      </a>
    </IntroSection>
    <CardContentWrap>
      <TextWrap>
        <CardSubTitle>Description</CardSubTitle>
        <Text align="left">
          UNUM's Website was a colaboration project with another developer. I
          was tasked with building a home page that would randomize images and
          gifs without overlaping, I accomplished it by building collision logic
          within the page. All pages of the website load below 3.9 seconds. This
          website was build using Next.js
        </Text>
        <Text align="left">
          On the home page, the animation that controls the opacity of the main
          title was build using javascript and connects to the scroll bar as a
          control. No libraries were used.
        </Text>
      </TextWrap>
      <TextWrap>
        <CardSubTitle>Project Solutions</CardSubTitle>
        <Text align="left">
          The website features a blending mode on the navigation as well as page
          transitions. But the most complex feature is the image randomization
          on the home page, it has to render the images at random positions
          without overlap. It also works on mobile views.
        </Text>
      </TextWrap>
    </CardContentWrap>
  </CardWrapper>
)

const RocketFinder = () => (
  <CardWrapper>
    <CardHeaderWrap>
      <ProjectTitle>RocketFinder</ProjectTitle>
    </CardHeaderWrap>
    <ProjectDemoWrap>
      <iframe
        width="100%"
        height="100%"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        src="https://www.youtube.com/embed/venpHSd_OBY"
      ></iframe>
    </ProjectDemoWrap>
    <IntroSection>
      <a
        href={"https://devtrader.github.io/RocketFinder/"}
        target="__blank"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ButtonText>Visit the live project</ButtonText>
      </a>
    </IntroSection>
    <CardContentWrap>
      <TextWrap>
        <CardSubTitle>Description</CardSubTitle>
        <Text align="left">
          This was a personal project, one of my first apps. using jQuery,
          Canvas and AJAX requests. It retrieves data from a rocket launch api
          and renders the positions of the launches on a 3d globe (that also
          works on mobile).
        </Text>
        <Text align="left">
          I was responsible for all the design and code of this entire project.
        </Text>
      </TextWrap>
      <TextWrap>
        <CardSubTitle>Project Solutions</CardSubTitle>
        <Text align="left">
          The WebGL 3d globe used needed to animate, so I made a recursive
          function that adds to the "center target" of the globe both in X and Y
          axis. It also has acceleration and deacceleration.
        </Text>
      </TextWrap>
    </CardContentWrap>
  </CardWrapper>
)
