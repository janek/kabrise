import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

import { Container } from "@components/global"
import ExternalLink from "@common/ExternalLink"

const Header = () => {
  const intl = useIntl()
  return (
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
                <h1>{intl.formatMessage({ id: "header.opencall" })}</h1>
                <br />
                <span style={{ color: "#3d5ea9" }}>
                  {intl.formatMessage({ id: "header.apply.text" })}
                </span>
              </Text>
            </Grid>
          </Container>
        </HeaderWrapper>
      )}
    />
  )
}

const ApplicationLinksWrapper = styled.div`
  border-radius: 10px;
  -webkit-border-radius: 10px 10px;
  padding: 10px 10px;
  width: 200px;
  margin-bottom: 10px;

  :hover {
    background-color: #fbde4e;
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
