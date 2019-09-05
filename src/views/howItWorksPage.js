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
  min-width: 330px;
  width: 25%;
  padding: 20px;
  box-sizing: border-box;
  margin: 10px;
  background: white;
  height: 450px;
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

const CardNumber = styled.p`
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

const TextWrap = styled.div`
  margin-top: 30px;
  padding: 20px;
`

export default function HowItWorksPage() {
  return (
    <PageContainer>
      <PageTitle>How It Works</PageTitle>
      <PageSubtitle>
        3 simple steps to more <strong>cases, clients and opportunities</strong>
        .
      </PageSubtitle>

      <CardsContainer>
        <CardOne />
        <CardTwo />
        <CardThree />
      </CardsContainer>
    </PageContainer>
  )
}

const CardOne = () => (
  <CardWrapper>
    <CardHeaderWrap>
      <CardNumber>1</CardNumber>
      <CardTitle>Schedule a call</CardTitle>
    </CardHeaderWrap>

    <IconContext.Provider
      value={{
        size: "60px",
        color: "black",
      }}
    >
      <IconWrap>
        <IoIosCall />
      </IconWrap>
    </IconContext.Provider>
    <TextWrap>
      <Text>
        If you are not getting the results you want for your practice, scheudle
        a call with me and I'll give you my expert opinion.
      </Text>
    </TextWrap>
  </CardWrapper>
)

const CardTwo = () => (
  <CardWrapper>
    <CardHeaderWrap>
      <CardNumber>2</CardNumber>
      <CardTitle>Strategy</CardTitle>
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
      <CardNumber>3</CardNumber>
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
