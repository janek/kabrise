import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// import * as typeformEmbed from "@typeform/embed"

import { ReactTypeformEmbed } from "react-typeform-embed"

import { Container } from "@components/global"
import ExternalLink from "@common/ExternalLink"

// const typeform = typeformEmbed.makePopup(
//   "https://rrszynka.typeform.com/to/wnNC43", // NOTE: Replace with your typeform URL
//   {
//     mode: "drawer_right",
//     autoClose: 3000,
//     hideHeaders: true,
//     hideFooters: true,
//     onSubmit: function() {
//       console.log("Typeform successfully submitted")
//       this.close()
//     }
//   }
// )

const Header = () => (
  // const myScr = require("../../scripts/embedTypeform.js");
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "build" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
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
              <Img fluid={data.art_build.childImageSharp.fluid} />
            </Art>
            <Text>
              <h1>Wir laden dich ein</h1>
              <br />

              <ReactTypeformEmbed
                popup
                url="https://rrszynka.typeform.com/to/wnNC43"
              />
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
)

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`

const Art = styled.figure`
  width: 100%;
  margin: 0;

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

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`

export default Header
