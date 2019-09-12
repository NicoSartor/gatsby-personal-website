import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

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
`

const TitleWrap = styled.div`
  margin: 36px;
`

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

function HomePage() {
  return (
    <Container>
      <LeftSide>
        <TitleWrap>
          <SiteTitle>Nicolas Kao Sartor</SiteTitle>
          <Subtitle>Full Stack Engineer</Subtitle>
        </TitleWrap>
      </LeftSide>
    </Container>
  )
}

export default HomePage
