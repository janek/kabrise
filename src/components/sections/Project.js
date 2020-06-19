import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Section, Container } from "@components/global"

const Project = () => (
  <StaticQuery
    query={graphql`
      query {
        stage: file(sourceInstanceName: { eq: "art" }, name: { eq: "stage" }) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="project">
        <AboutWrapper>
          <Container>
            <Grid inverse>
              <Art>
                <Img fluid={data.stage.childImageSharp.fluid} />
              </Art>
              <div>
                <h2>Was wir machen</h2>
                <p>
                  In der ersten Projektphase im Juni und Juli 2020 leben wir in
                  der alten Heilstätte am Grabowsee. Diese bietet etwas, das in
                  vielen Städten verloren gegangen ist: Freiraum. Jeder der über
                  tausend Räume, sowie deren Umgebung kann eine Bühne für Kunst
                  und Kultur sein. Diese nutzen wir gemeinsam mit eingeladenen
                  Personen sowohl für diversen kreativen Output als auch für die
                  Auseinandersetzung mit der Thematik Klimagerechtigkeit.
                </p>
              </div>
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
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;
  padding-top: 50px;
  padding-bottom: 50px;

  ${props =>
    props.inverse &&
    `
    text-align: left;
  `}

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

export default Project
