import React, { Component, useState } from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

import { Container } from "@components/global"
import Logo from "@common/Logo"
import ExternalLink from "@common/ExternalLink"

import Language from "./Language"

import { ReactComponent as MenuIcon } from "@static/icons/menu.svg"

export const Mobile = styled.div`
  display: none;
  
  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
  
  ${props =>
    props.hide &&
    `
    display: block;
  
    @media (max-width: ${props.theme.screen.md}) {
      display: none;
    }
  `}
`

// TODO: reconsider naming between here and Navbar
export const NavListWrapper = styled.div`
  padding: 10vh 0;
  position: fixed;
  width: 10vw;
  height: 100vh;
  top: 0;
  z-index: 1000;
  font-family: ${props => props.theme.font.menu};
  ${props => props.theme.font_size.regular};
  font-size: 1.2em;
  
  .language {
    margin: 30px;
  }
  
  ul {
    height: 80vh;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  li {
    transform: rotate(-90deg);
    margin: 0 0.75em;
  
    a {
      text-decoration: none;
      opacity: 0.7;
      color: ${props => props.theme.color.primary};
  
      :hover {
        text-decoration: underline;
      }
    }
  
    &.active {
      a {
        opacity: 1;
      }
    }
  }
`

export const NavItem = styled.li`
  margin: 0 0.75em;
  font-family: ${props => props.theme.font.menu};
  ${props => props.theme.font_size.regular};
  
  a {
    text-decoration: none;
    opacity: 0.7;
    color: ${props => props.theme.color.black.regular};
  }
  
  &.active {
    a {
      opacity: 1;
    }
  }
`

const Sidebar = props => {

  const NAV_ITEMS_RAW = ["video", "about", "projects", "contact"]

  const getNavAnchorLink = item => (
    <AnchorLink href={`#${item.toLowerCase()}`}>
      {item}
    </AnchorLink>
  )

  const intl = useIntl()

  const navItems = NAV_ITEMS_RAW.map(name => {
    const targetString = "navbar" + "." + name
    return intl.formatMessage({ id: targetString })
  })

  const getNavList = () => (
    <NavListWrapper>
      
      <Scrollspy
        items={NAV_ITEMS_RAW.map(item => item.toLowerCase())}
        currentClassName="active"
        offset={-64}
      >
        <Language />
        {NAV_ITEMS_RAW.map(navItem => (
          <li key={navItem}>
            {getNavAnchorLink(intl.formatMessage({ id: "navbar." + navItem }))}
          </li>
        ))}
      </Scrollspy>
      
    </NavListWrapper>
  )

  return (
    //XXX: should we pass down props? (used to be <Nav {...props}>). Should be no problem, but is it desired?
      <Mobile hide>
        {getNavList({})}
      </Mobile>
  )
}



export default Sidebar
