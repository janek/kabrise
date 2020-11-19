import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"


import BriseVideo from "../../video/frische_brise_15sec.mp4"


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
          <video loop muted autoPlay>
            <source src={BriseVideo} type="video/mp4" />
          </video>
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
