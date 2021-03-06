import styled from "styled-components"

import { Container } from "@components/global"

export const Nav = styled.nav`
  padding: 16px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`

export const StyledContainer = styled(Container)`
  margin: 1vh 1vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavListWrapper = styled.div`
  display: ${props => (props.mobile ? "flex" : "none")};
  flex-direction: ${props => (props.mobile ? "column" : "row")};
  font-family: ${props => props.theme.font.menu};
  ${props => props.theme.font_size.regular};

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    ${({ mobile }) =>
      mobile &&
      `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
  }

  li {
    margin: 0 0.75em;

    a {
      text-decoration: none;
      opacity: 0.7;
      color: ${props => props.theme.color.black.regular};

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

export const MobileMenu = styled.div`
  width: 100%;
  text-align: center;
  a {
    font-size: 42px;
  }
`

export const Brand = styled.div`
  font-family: ${props => props.theme.font.headers};
  ${props => props.theme.font_size.large};
`

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
