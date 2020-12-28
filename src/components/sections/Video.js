import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import BriseVideo from "../../video/frische_brise_15sec.mp4"

const Video = () => {
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
      render={() => (
        <section id="video">
          <VideoWrapper>
            <VideoPlayer loop muted playsinline autoPlay>
              <source src={BriseVideo} type="video/mp4" />
            </VideoPlayer>
          </VideoWrapper>
        </section>
      )}
    />
  )
}

const VideoWrapper = styled.div`
  min-height: 500px;
  background-color: grey;
  height: 100vh;
`

// XXX: We most likely need media queries for mobile screens
// (see Navbar.js for examples)
const VideoPlayer = styled.video`
  object-fit: cover;
  width: 100vw;

  top: 0;
  left: 0;
`

export default Video
