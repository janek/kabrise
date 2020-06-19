import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Section, Container } from "@components/global"

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
        stage: file(sourceInstanceName: { eq: "art" }, name: { eq: "stage" }) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        five_people_indoors: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "five_people_indoors" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>Wer wir sind</h2>
              <p>
                Kabrise ist ein frisch gegründetes Kollektiv, bestehend aus
                Kultur- und Kunstschaffenden. Wir kommen zusammen, um uns
                gemeinsam mit ökologischer und sozialer Nachhaltigkeit
                auseinanderzusetzen. Wir kreieren einen Raum des Lernens in dem
                wir Ideen und Vorbilder einladen, um gemeinsam eine bessere Welt
                zu denken, zum Handeln aufzurufen und Verantwortung für die
                Zukunft zu übernehmen. Gewaltfreie, direkte und achtsame
                Kommunikation gehören zu unseren Grundprinzipien und wir freuen
                uns über Feedback, denn nur so können wir lernen und uns
                langfristig entwickeln.
              </p>
            </div>
            <Art>
              <Img fluid={data.blackboard.childImageSharp.fluid} />
            </Art>
          </Grid>
          <br />
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

          <br />

          <Grid>
            <div>
              <h2>Wo der Fokus liegt</h2>
              <p>
                In unserem Format “Heilstätte Zukunft” laden wir Expert*innen
                für einen gemeinsamen Diskurs ein. Filmisch inszeniert stellen
                wir konkrete Lösungsansätze und Projekte vor, die mit den
                gewonnenen Erkenntnissen bereits erfolgreich arbeiten. Zum Start
                des Formates thematisieren wir den Zusammenhang zwischen
                Klimawandel und Clubkultur sowie der Theater- und Kunstszene.
              </p>
            </div>
            <Art>
              <Img fluid={data.five_people_indoors.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
)

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

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

export default About
