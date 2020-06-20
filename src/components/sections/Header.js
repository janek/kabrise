import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Container } from "@components/global"
import ExternalLink from "@common/ExternalLink"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        dancer: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "dancer_one" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.dancer.childImageSharp.fluid} />
            </Art>
            <Text>
              <h1>
                Open call for artists
                <br />
                15.06 - 15.07
              </h1>
              <br />
              <ApplicationLinksWrapper>
                <StyledExternalLink href="/apply-en/">
                  Apply now (EN){" "}
                  <span style={{ color: "#FBDE4E" }}>&nbsp;&#x2794;</span>
                </StyledExternalLink>
              </ApplicationLinksWrapper>
              <ApplicationLinksWrapperYellow>
                <StyledExternalLink href="/apply-de/">
                  Hier bewerben (DE){" "}
                  <span style={{ color: "#4260A4" }}>&nbsp;&#x2794;</span>
                </StyledExternalLink>
              </ApplicationLinksWrapperYellow>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
)

const ApplicationLinksWrapper = styled.div`
  border-radius: 10px;
  -webkit-border-radius: 10px 10px;
  padding: 10px 10px;
  width: 200px;
  margin-bottom: 10px;

  :hover {
    background-color: #3d5ea9;
    color: white;
  }
`

const ApplicationLinksWrapperYellow = styled.div`
  border-radius: 10px;
  -webkit-border-radius: 10px 10px;
  padding: 10px 10px;
  width: 200px;
  margin-bottom: 10px;

  :hover {
    background-color: #ffdf10;
    color: black;
  }
`

const HeaderWrapper = styled.header`
  margin-bottom: -160px;
  background-color: ${props => props.theme.color.white};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`

const Art = styled.figure`
  width: 60%;
  margin: 0;

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
  }

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;
  display: block;
  s &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`

export default Header
