import React from "react"
import styled from "styled-components"

import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { useIntl } from "gatsby-plugin-intl"

import Language from "./Language"

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

// Q: I want to anchor sth at the bottom,
// but I count from the top. Is there a better way?
export const NavListWrapper = styled.div`
  position: fixed;
  margin-top: 30vh;
  width: 10vw;
  height: 100vh;
  top: 0;
  z-index: 1000;
  font-family: ${props => props.theme.font.menu};
  ${props => props.theme.font_size.regular};
  font-size: 1.5em;
  mix-blend-mode: exclusion;

  ul {
    height: 60vh;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  li {
    transform: rotate(-90deg);

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
`

const Sidebar = () => {
  const NAV_ITEMS_RAW = ["video", "about", "projects", "contact"]

  const getNavAnchorLink = item => (
    <AnchorLink href={`#${item.toLowerCase()}`}>{item}</AnchorLink>
  )

  const intl = useIntl()

  const getNavList = () => (
    <NavListWrapper>
      <Scrollspy
        items={NAV_ITEMS_RAW.map(item => item.toLowerCase())}
        currentClassName="active"
        // TODO: after expanding the contact section:
        // test offset on different devices, adjust (maybe per-device)
        offset={-1500}
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
    <Mobile hide>{getNavList({})}</Mobile>
  )
}

export default Sidebar
