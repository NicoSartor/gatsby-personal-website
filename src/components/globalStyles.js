import styled from "styled-components"

export const PageContainer = styled.div`
  padding: 80px 50px;
`

export const PageTitle = styled.h1`
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 400;
  text-align: center;
`

export const PageSubtitle = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 300;
  text-align: ${props => (props.align ? props.align : "center")};
  color: ${props => (props.color ? props.color : "black")};
  margin-top: ${props => (props.marginTop ? props.marginTop : "30px")};
  @media (max-width: 1200px) {
    font-size: 17px;
  }
`

export const Text = styled.p`
  line-height: 1.889;
  letter-spacing: 1.3px;
  text-align: ${props => (props.align ? props.align : "center")};
  color: ${props => (props.color ? props.color : "black")};
  @media (max-width: 1200px) {
    letter-spacing: 1.2px;
    line-height: 1.4;
  }
`
