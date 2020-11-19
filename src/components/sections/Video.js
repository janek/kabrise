import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

import { Section, Container } from "@components/global"
import BlueIcon from "@static/icons/blue_circle.svg"

const Project = () => {
  const intl = useIntl()
  return (
    <StaticQuery
      query={graphql`
        query {
          stage: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "stage" }
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
        <VideoWrapper id="video">
          
        </VideoWrapper>
      )}
    />
  )
}

const VideoWrapper = styled.div`
  min-height: 500px;
  background-color: grey;
`


export default Project
