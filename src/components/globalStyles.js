import styled from "styled-components"

export const PageContainer = styled.div`
  padding: 130px 50px 70px 50px;
  @media (max-width: 1000px) {
    padding: 130px 20px 70px 20px;
  }
  @media (max-width: 400px) {
    padding: 130px 5px 70px 5px;
  }
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
  line-height: 1.7;
  letter-spacing: 1.3px;
  text-align: ${props => (props.align ? props.align : "center")};
  color: ${props => (props.color ? props.color : "black")};
  margin-top: 5px;
  font-weight: ${props => (props.bold ? "700" : "300")};
  @media (max-width: 1200px) {
    letter-spacing: 1.2px;
    line-height: 1.4;
  }
`
