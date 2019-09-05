import React from "react"
import styled from "styled-components"

import Myself from "../images/Myself.png"
import { PageContainer, PageTitle, Text } from "../components/globalStyles"

const QuoteContainer = styled.div`
  border-left: 4px solid goldenrod;
  padding: 20px;
  @media (max-width: 1250px) {
    width: 90%;
  }
`
const QuoteText = styled.p`
  font-size: 22px;
  letter-spacing: 2px;
  font-weight: 300;
`

const Section = styled.div`
  margin-top: 25px;
`

const SectionTitle = styled.h1`
  letter-spacing: 2px;
  font-weight: 400;
`

const SectionLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 15px;
  align-items: center;
`

const MyImage = styled.div`
  background-image: url(${Myself});
  width: 200px;
  height: 200px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  margin: 10px 5%;
  @media (max-width: 1250px) {
    margin: 10px auto;
  }
`

const MyInfo = styled.div`
  width: 70%;
  margin-left: 30px;
`

const P = styled.p`
  letter-spacing: 1.5px;
  margin: 3px 0;
`

const ContentLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 50px;
`

const TextWrap = styled.div`
  width: 45%;
  min-width: 400px;
  margin: 0 auto;
  margin-bottom: 40px;
  @media (max-width: 1000px) {
    min-width: 100%;
  }
`

function AboutPage() {
  return (
    <PageContainer>
      <PageTitle>About Me</PageTitle>
      <Section>
        <SectionLayout>
          <MyImage />
          <MyInfo>
            <QuoteContainer>
              <QuoteText>
                "My services are calibrated for generating results for your
                business. I apply my experience as a software engineer to solve
                problems for you." - Nicolas Kao Sartor
              </QuoteText>
            </QuoteContainer>
            <Text>
              I'm a passionate software engineer and internet marketer. With my
              unique skills I can provide faster web pages, more engaging
              experiences, higher conversion rates and more effective marketing
              campaigns for your law practice.
            </Text>
          </MyInfo>
        </SectionLayout>
      </Section>
      <Section>
        <ContentLayout>
          <TextWrap>
            <SectionTitle>My Mission</SectionTitle>
            <Text>
              To use my software engineering experience to create tools and
              solutions for businesses to focus on what they love.
            </Text>
            <Text>
              To provide a high quality package of services that will generate
              results.
            </Text>
            <Text>To help businesses grow as I grow my own business.</Text>
            <Text>
              To create a unique experience using web technologies, that no
              other competitor will provide.
            </Text>
          </TextWrap>
          <TextWrap>
            <SectionTitle>Who I Serve</SectionTitle>
            <Text>
              I work with Law Firms and Lawyers looking to increase their
              business by growing their presence online.
            </Text>
          </TextWrap>
        </ContentLayout>
      </Section>
      <Section>
        <SectionTitle style={{ textAlign: "center" }}>
          My Experience
        </SectionTitle>
        <TextWrap>
          <Text>
            Creating growth for your business is a hard task to tackle alone. I
            have worked mainly with startups in Los Angeles, during my service
            to them I have developed multiple high complexity features to
            attract millions of users. Now, I use all my knowledge to build
            services to help businesses and professionals grow their law
            practice.
          </Text>
        </TextWrap>
      </Section>
    </PageContainer>
  )
}

export default AboutPage
