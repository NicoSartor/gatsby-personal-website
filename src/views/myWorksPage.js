import React from "react"
import styled from "styled-components"
import { IconContext } from "react-icons"
import { IoIosCall, IoIosGitPullRequest, IoIosRibbon } from "react-icons/io"

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
        <CardTwo />
        <CardThree />
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
  width: 600px;
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

const UnumWebApp = () => (
  <CardWrapper>
    <CardHeaderWrap>
      <ProjectTitle>Unum Web App</ProjectTitle>
    </CardHeaderWrap>
    <ProjectDemoWrap>
      <iframe
        width="560"
        height="315"
        allowfullscreen
        src="https://www.youtube.com/embed/zzCghas69l8"
      ></iframe>
    </ProjectDemoWrap>

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

const CardTwo = () => (
  <CardWrapper>
    <CardHeaderWrap>
      <ProjectTitle>Unum Website</ProjectTitle>
    </CardHeaderWrap>

    <IconContext.Provider
      value={{
        size: "60px",
        color: "black",
      }}
    >
      <IconWrap>
        <IoIosGitPullRequest />
      </IconWrap>
    </IconContext.Provider>
    <TextWrap>
      <Text>
        During the call, we will discuss your goals and needs. After the call
        you will receive an outline for a marketing plan designed to grow and
        create more authority for your practice.
      </Text>
    </TextWrap>
  </CardWrapper>
)

const CardThree = () => (
  <CardWrapper>
    <CardHeaderWrap>
      <ProjectTitle>3</ProjectTitle>
      <CardTitle>Win Online</CardTitle>
    </CardHeaderWrap>

    <IconContext.Provider
      value={{
        size: "60px",
        color: "black",
      }}
    >
      <IconWrap>
        <IoIosRibbon />
      </IconWrap>
    </IconContext.Provider>
    <TextWrap>
      <Text>
        After we build the solution tailored to your business, we can
        continually track your traffic and provide insights for your growth!
      </Text>
    </TextWrap>
  </CardWrapper>
)
