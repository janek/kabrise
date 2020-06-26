import React, { Component } from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"

import { Container } from "@components/global"
import Logo from "@common/Logo"
import ExternalLink from "@common/ExternalLink"

import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile
} from "./style"

import Language from "./Language"

import { ReactComponent as MenuIcon } from "@static/icons/menu.svg"

import InstagramIcon from "@static/icons/instagram.svg"
import FacebookIcon from "@static/icons/facebook.svg"
import YoutubeIcon from "@static/icons/youtube.svg"

const SOCIAL = [
  {
    icon: InstagramIcon,
    link: "https://instagram.com/kabrise_"
  },

  {
    icon: YoutubeIcon,
    link: "https://www.youtube.com/channel/UCue1EZ2sBVBZKEChwmLu2mg"
  },
  {
    icon: FacebookIcon,
    link: "https://www.facebook.com/kabrisekollektiv"
  }
]

const NAV_ITEMS = ["about", "project", "focus"]

class Navbar extends Component {
  state = {
    mobileMenuOpen: false
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }))
  }

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false })
    }
  }

  getNavAnchorLink = item => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  )

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <SocialIcons>
        {SOCIAL.map(({ icon, link }) => (
          <ExternalLink key={link} href={link} title={link}>
            <img src={icon} alt="link" />
          </ExternalLink>
        ))}
      </SocialIcons>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
      <Language />
    </NavListWrapper>
  )

  render() {
    const { mobileMenuOpen } = this.state

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <Logo />
          <Mobile>
            <button onClick={this.toggleMobileMenu} style={{ color: "black" }}>
              <MenuIcon />
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    )
  }
}

const SocialIcons = styled.div`
  display: inline-block;

  img {
    margin: 0 8px;
    width: 60px;
    height: 60px;
    margin-left: -8px;
    margin-right: -8px;
    ${({ mobile }) =>
      mobile &&
      `
        width: 60px;
        height: 60px;
      `};
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    margin-right: 40px;
  }
`

export default Navbar
