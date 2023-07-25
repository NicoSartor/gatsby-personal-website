import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { PageSubtitle, Text } from "../components/globalStyles"
import Myself from "../images/Myself.jpg"
import Niko from "../images/Niko.jpg"
import Jeffrey from "../images/Jeffrey.jpg"

const Container = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const LeftSide = styled.div`
  min-height: 100%;
  background: #0d282f;
  width: 60%;
  padding: 36px 80px 80px 80px;
  box-sizing: border-box;
  flex: 1;
  @media (max-width: 1280px) {
    width: 50%;
  }
  @media (max-width: 1024px) {
    width: 100%;
    padding: 36px;
  }
  @media (max-width: 1000px) {
    padding-top: 56px;
  }
`

const RightSide = styled.div`
  min-height: 100%;
  background: #dae0e0;
  width: 40%;
  box-sizing: border-box;
  @media (max-width: 1280px) {
    width: 50%;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
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

const SubSegmentTitle = styled(Text)`
  padding-top: 20px;
  text-decoration: underline;
`

const Skills = () => (
  <SkillsWraper>
    <PageSubtitle align="left" color="white">
      Specialization Stack:
    </PageSubtitle>
    <Text align="left" color="white">
      Typescript, React, Node, Express, MongoDB, Nest.js, Next.js, AWS, MUI
    </Text>
    <PageSubtitle align="left" color="white">
      Skills:
    </PageSubtitle>
    <Text align="left" color="white">
      <SubSegmentTitle color="white" bold align="left">
        Technical Lead:
      </SubSegmentTitle>
      <Text color="white" align="left">
        Led a team of engineers to deliver a product that was distributed
        globablly. Worked with product managers to define and refine
        requirements. Delivered solutions that are able to adapt to growth and
        changes.
      </Text>
      <SubSegmentTitle color="white" bold align="left">
        Software Architecture:
      </SubSegmentTitle>
      <Text color="white" align="left">
        Architected solutions that are scalable and maintainable. Reducing cost
        of ownership and increasing value over time.
      </Text>
      <Text color="white" align="left">
        Building flexible software that can adapt to changing requirements and
        fast paced environments.
      </Text>
      <SubSegmentTitle color="white" bold align="left">
        Full Stack Development:
      </SubSegmentTitle>
      <Text color="white" align="left">
        Since 2017, focused on quality and performance. Utilizing agile
        philosophy and delivering value that builds up over time.
      </Text>
      <Text color="white" align="left">
        Experience migrating to and from: Microservices (point to point and
        event driven), monorepos and monoliths.
      </Text>
    </Text>
    <PageSubtitle align="left" color="white">
      Experience with Production APIs:
    </PageSubtitle>
    <Text align="left" color="white">
      Tableau, Auth0, Stripe, Instagram, Facebook, Google, Unsplash, Pexels
    </Text>
  </SkillsWraper>
)

const IntroWrap = styled.div`
  /* max-width: 700px; */
  margin-top: 100px;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 800px) {
    display: block;
  }
`

const MyImage = styled.div`
  background-image: url(${Myself});
  min-width: 200px;
  width: 200px;
  height: 200px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 10px;
  @media (max-width: 1280px) {
    margin: 0 auto;
  }
  @media (max-width: 840px) {
    width: 230px;
    height: 230px;
    margin-bottom: 30px;
  }
`

const IntroTextWrap = styled.div`
  max-width: 500px;
  width: 100%;

  @media (max-width: 1280px) {
    max-width: 450px;
    margin: 0 20px;
  }
  @media (max-width: 1000px) {
    margin: 0 auto;
  }
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

const Intro = ({ year }) => (
  <IntroWrap>
    <MyImage></MyImage>
    <IntroTextWrap>
      <PageSubtitle align="left" color="white" marginTop="2px">
        Enterprise and SaaS Engineer
      </PageSubtitle>
      <Text align="left" color="white">
        With {year} years of experience with software developing and
        architecting, my goal is to deliver value to the end user and refine
        teams to be sharp and efficient competitors.
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
  @media (max-width: 1000px) {
    margin-top: 50px;
  }
`
const RefMargin = styled.div`
  margin-top: 30px;
`

const RefImage = styled.div`
  background-image: url(${props => props.src});
  min-width: 100px;
  height: 100px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 10px;
  margin-top: 10px;
  @media (max-width: 1280px) {
    margin: 10px 10px;
  }
  @media (max-width: 1200px) {
    width: 100px;
    margin: 0px;
  }
`

const RefSection = styled.div`
  background: white;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  width: 90%;
  margin: 30px auto;
  align-items: top;
  @media (max-width: 1200px) {
    padding: 10px;
    display: block;
  }
`

const RefP = styled.p`
  letter-spacing: 1.2px;
  font-size: 13px;
  text-align: left;
  margin-top: 10px;
`

const References = () => (
  <ReferencesWrap>
    <PageSubtitle>What ohers say about me</PageSubtitle>
    <RefMargin></RefMargin>
    <RefSection>
      <RefImage src={Jeffrey} />
      <div>
        <RefP>
          Nicolas is an innovative thinker and a valued friend at my employment.
          He is able to quickly grasp new ideas, and quickly iterates that to
          new code and foundations of a new product.
        </RefP>
        <RefP>
          As scrum master, he was able to hamper down on improving many internal
          processes along the way and gave the company some new direction as
          well as defining old ones in an agile fashion. I highly recommend
          Nicolas as a skilled React developer along with having innate
          leadership qualities.
        </RefP>
        <RefP>- Jeffrey Chang</RefP>
      </div>
    </RefSection>
    <RefSection>
      <RefImage src={Niko} />
      <div>
        <RefP>
          Nicolas has been a pleasure to work with and would undoubtedly prove
          valuable on any team. He grasps things very quickly and is never
          tentative about trying something differently. He works diligently in
          his own time, especially at dogged attempts to solve complex problems,
          not because he has to, but because he likes to. He has a great natural
          talent for logic and maximizing efficiency is always in his frame of
          scope.
        </RefP>
        <RefP>
          He also has good intuition for design concepts, usability and
          mobile-first layouts. Nicolas has always been a nice and fun person to
          code with and demonstrates great soft skills. He is not afraid to say
          he doesn't know or understand something. He has been one of the
          brightest people I've worked with and I expect nothing but great
          things from him moving forward.
        </RefP>
        <RefP>- Niko Tzikas</RefP>
      </div>
    </RefSection>
  </ReferencesWrap>
)

function HomePage() {
  const currentYear = new Date().getYear()
  const yearStarted = new Date("2017-07-01").getYear()
  const diff = Math.ceil(currentYear - yearStarted)

  return (
    <Container>
      <LeftSide>
        <TitleWrap>
          <SiteTitle>Nicolas Kao Sartor</SiteTitle>
          <Subtitle>Full Stack Engineer</Subtitle>
        </TitleWrap>
        <Intro year={diff} />
        <Skills />
      </LeftSide>
      <RightSide>
        <References />
      </RightSide>
    </Container>
  )
}

export default HomePage
