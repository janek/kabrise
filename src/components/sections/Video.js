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
          <VideoPlayer loop muted autoPlay playsinline>
            <source src={BriseVideo} type="video/mp4" />
          </VideoPlayer>
        </VideoWrapper>
      )}
    />
  )
}

const VideoWrapper = styled.div`
  min-height: 500px;
  background-color: grey;
`

// XXX: We most likely need media queries for mobile screens
// (see Navbar.js for examples)
const VideoPlayer = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  
  top: 0;
  left: 0;
`

export default Project
