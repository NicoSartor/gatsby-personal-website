import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import styled from "styled-components"

import windowUtils from "../utils/windowUtils"

import siteLinks from "../config/siteLinks"

import LogoBlack from "../images/svgLogo.svg"
import LogoWhite from "../images/svgLogoWhite.svg"

import "./burgerMenu.css"

const Container = styled.div`
  color: ${props => props.color};
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  padding-top: 36px;
  padding-left: 50px;
  padding-right: 50px;
  box-sizing: border-box;
  position: absolute;
  /* background: #ffffff; */
  width: 100%;
  align-items: center;
  z-index: 2;
`

const Logo = styled.img`
  width: 100px;
`

const Slogan = styled.p`
  font-family: georgia, serif;
  font-size: 11px;
`

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
  max-width: 650px;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  min-width: 300px; */
`

const LinkContent = styled.p`
  text-transform: capitalize;
`

const LinkBorder = styled.div`
  border-bottom: 2px solid ${props => props.color};
  margin: 0 10px;
  clip-path: ${props =>
    props.isActive
      ? null
      : `polygon(
    67% 0,
    100% 0,
    100% 35%,
    100% 84%,
    0 85%,
    0 100%,
    0 100%,
    0 79%,
    0 0,
    30% 0
  )`};
  transition: clip-path 0.2s ease-in-out;
  &:hover {
    clip-path: polygon(
      67% 0,
      100% 0,
      100% 35%,
      100% 84%,
      100% 89%,
      100% 100%,
      0 100%,
      0 79%,
      0 0,
      30% 0
    );
  }
`

const DesktopLink = ({ path, name, textColor, activeLink }) => {
  let linkLabel = name.replace(/\s+/g, "-")
  console.log(activeLink, linkLabel)
  return (
    <Link to={path} style={{ textDecoration: "none", color: textColor }}>
      <LinkBorder color={textColor} isActive={activeLink === linkLabel}>
        <LinkContent>{name}</LinkContent>
      </LinkBorder>
    </Link>
  )
}

const Header = ({ siteTitle, color, activeLink }) => {
  const [isMobile, setIsMobile] = useState(null)
  useEffect(() => {
    setIsMobile(windowUtils.isMobile())
    window.addEventListener("resize", () => {
      setIsMobile(windowUtils.isMobile())
    })
  }, [])
  let textColor = color ? color : "black"
  if (!isMobile) {
    return (
      <Container>
        <div>
          {/* <Link style={{ textDecoration: "none", color: textColor }} to="/">
            <Logo src={textColor === "black" ? LogoBlack : LogoWhite} />
          </Link> */}
        </div>

        <LinksWrapper>
          {siteLinks.links.map(link => {
            if (link.disabled) {
              return
            }
            return (
              <DesktopLink
                activeLink={activeLink}
                path={link.path}
                name={link.name}
                textColor={textColor}
              />
            )
          })}
        </LinksWrapper>
        {/* <h2>GIVE ME A CALL: 999 999 9999</h2> */}
      </Container>
    )
  } else {
    return <MobileNav textColor={textColor} />
  }
}

const MobileNav = ({ textColor }) => {
  const [isMenuOpen, toggleMenu] = useState(false)

  return (
    <MobileContainer>
      <BurgerMenuToggle
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        color={textColor}
      />
      <BurgerMenu isMenuOpen={isMenuOpen} />
      {/* <Link style={{ textDecoration: "none", color: textColor }} to="/">
        <MobileLogo src={textColor === "black" ? LogoBlack : LogoWhite} />
      </Link> */}
    </MobileContainer>
  )
}

const BurgerToggleContainer = styled.div`
  position: fixed;
  top: 25px;
  right: 8%;
  z-index: 5;
  transition: all 0.3s;
  transform: ${props => (props.isOpen ? "translateX(6px)" : null)};
`
const burgerSectionHeight = 3
const animationTime = 0.6

const BurgerTop = styled.div`
  height: ${burgerSectionHeight}px;
  width: 80%;
  background: ${props => props.color};
  transform-origin: 0% 0%;
  transform: ${props =>
    props.isOpen ? "rotate(45deg) translate(-3px, 0)" : null};
  transition: all ${animationTime}s;
`
const BurgerMid = styled.div`
  height: ${burgerSectionHeight}px;
  width: 80%;
  margin-top: 6px;
  margin-bottom: 6px;
  background: ${props => props.color};
  opacity: ${props => (props.isOpen ? 0 : 1)};
  transition: all 0.3s;
`

const BurgerBottom = styled.div`
  height: ${burgerSectionHeight}px;
  width: 80%;
  transform-origin: 0% 100%;
  transform: ${props =>
    props.isOpen ? "rotate(-45deg)  translate(-3px, 0)" : null};
  background: ${props => props.color};
  transition: all ${animationTime}s;
`

const BurgerMenuToggle = ({ isMenuOpen, toggleMenu, color }) => {
  const colorControl = isMenuOpen ? "black" : color
  return (
    <BurgerToggleContainer
      isOpen={isMenuOpen}
      onClick={() => {
        toggleMenu(!isMenuOpen)
      }}
    >
      <div id="burger-menu-toggle" style={{ width: "40px", height: "40px" }}>
        <BurgerTop isOpen={isMenuOpen} color={colorControl} />
        <BurgerMid isOpen={isMenuOpen} color={colorControl} />
        <BurgerBottom isOpen={isMenuOpen} color={colorControl} />
      </div>
    </BurgerToggleContainer>
  )
}

const BurgerMenuContainer = styled.div`
  z-index: 4;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  opacity: ${props => (props.isOpen ? "1" : "0")};
  pointer-events: ${props => (props.isOpen ? "all" : "none")};
  transition: all 0.2s;
`
const BurgerMenu = ({ isMenuOpen }) => {
  return (
    <BurgerMenuContainer isOpen={isMenuOpen}>
      <MobileLinksWrap>
        {siteLinks.links.map(link => {
          if (link.disabled) {
            return
          }
          return <MobileLinks path={link.path} name={link.name} />
        })}
      </MobileLinksWrap>
    </BurgerMenuContainer>
  )
}

const MobileContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  box-sizing: border-box;
  position: absolute;
  flex: 1;
  width: 100%;
  align-items: center;
  z-index: 2;
`

const MobileLogo = styled.img`
  width: 140px;
  position: absolute;
  left: 10%;
  /* transform: translateX(-50%); */
  top: 25px;
`

const MobileLinksWrap = styled.div`
  padding-left: 30px;
  padding-top: 20%;
`

const MobileLinkContent = styled.p`
  margin-bottom: 25px;
  padding: 5px;
  font-size: 22px;
  text-transform: capitalize;
  font-weight: 700;
`

const MobileLinks = ({ path, name }) => {
  return (
    <Link to={path} style={{ textDecoration: "none", color: "black" }}>
      <MobileLinkContent>{name}</MobileLinkContent>
    </Link>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
