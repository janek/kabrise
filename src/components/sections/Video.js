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
            <ScrollDownWrapper>
              <ScrollDownLink href="#projects">Scroll down</ScrollDownLink>
              <Arrow>
                <span></span>
                <span></span>
                <span></span>
              </Arrow>
            </ScrollDownWrapper>
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
  text-align: center;
`

// XXX: We most likely need media queries for mobile screens
// (see Navbar.js for examples)
const VideoPlayer = styled.video`
  object-fit: cover;
  width: 100vw;
  top: 0;
  left: 0;
`

const ScrollDownWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 100px;
`

const ScrollDownLink = styled.a`
  font-size: 15px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  font-weight: bold;
`

const Arrow = styled.div`
  position: absolute;
  bottom: 70px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  span {
    display: block;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    transform: rotate(45deg);
    margin: -5px;
    animation: animate 2s infinite;
  }
  span:nth-child(2) {
    animation-delay: -0.2s;
  }
  span:nth-child(3) {
    animation-delay: -0.4s;
  }
  @keyframes animate {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-10px, -10px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(0px, 0px);
    }
  }
`

export default Video
