import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Section, Container } from "@components/global"
import YoutubeIcon from "@static/icons/youtube.svg"

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        blackboard: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "blackboard" }
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
      <Section id="about">
        <AboutWrapper>
          <Container>
            <Circles>
              <img src={YoutubeIcon} />
            </Circles>
            <Grid>
              <div>
                <h2>Wer wir sind</h2>
                <p>
                  Kabrise ist ein frisch gegründetes Kollektiv, bestehend aus
                  Kultur- und Kunstschaffenden. Wir kommen zusammen, um uns
                  gemeinsam mit ökologischer und sozialer Nachhaltigkeit
                  auseinanderzusetzen. Wir kreieren einen Raum des Lernens in
                  dem wir Ideen und Vorbilder einladen, um gemeinsam eine
                  bessere Welt zu denken, zum Handeln aufzurufen und
                  Verantwortung für die Zukunft zu übernehmen. Gewaltfreie,
                  direkte und achtsame Kommunikation gehören zu unseren
                  Grundprinzipien und wir freuen uns über Feedback, denn nur so
                  können wir lernen und uns langfristig entwickeln.
                </p>
              </div>
              <Art>
                <Img fluid={data.blackboard.childImageSharp.fluid} />
              </Art>
            </Grid>
          </Container>
        </AboutWrapper>
      </Section>
    )}
  />
)

const AboutWrapper = styled.div`
  background-color: ${props => props.theme.color.primary};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  align-items: center;
  justify-items: center;
  margin: 24px 0;
  padding-top: 50px;
  padding-bottom: 50px;

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`

const Art = styled.figure`
  margin: 0;
  max-width: 760px;
  width: 100%;

  .gatsby-image-wrapper {
    max-height: 285px;
  }
`

const Circles = styled.figure`
  max-height: 100px;
  max-width: 100px;
  margin-left: 40%;
  margin-bottom: -10%;
  
  .img {
    max-height: 285px;
    margin 0 auto;
  }
`

export default About
