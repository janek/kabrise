import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Section, Container } from "@components/global"
import RedIcon from "@static/icons/red_circle.svg"

const Focus = () => (
  <StaticQuery
    query={graphql`
      query {
        work_group: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "work_group" }
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
      <Section id="focus">
        <AboutWrapper>
          <Container>
            <Circles>
              <img src={RedIcon} />
            </Circles>
            <Grid>
              <div>
                <h2>Wo der Fokus liegt</h2>
                <p>
                  In unserem Format <i>„Heilstätte Zukunft”</i> laden wir
                  Expert*innen für einen gemeinsamen Diskurs ein. Filmisch
                  inszeniert stellen wir konkrete Lösungsansätze und Projekte
                  vor, die mit den gewonnenen Erkenntnissen bereits erfolgreich
                  arbeiten. Zum Start des Formates befassen wir uns mit
                  Nachhaltigkeit im Kulturbetrieb und beleuchten dabei die
                  Klub-, Theater- und Kunstszene.
                </p>
              </div>
              <Art>
                <Img fluid={data.work_group.childImageSharp.fluid} />
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

const Circles = styled.figure`
  max-height: 100px;
  max-width: 100px;
  margin-left: 30%;
  margin-bottom: -10%;
  
  .img {
    max-height: 285px;
    margin 0 auto;
  }
`

const Art = styled.figure`
  margin: 0;
  max-width: 760px;
  width: 100%;
  border-radius: 10px;
  -webkit-border-radius: 10px 10px;

  .gatsby-image-wrapper {
    max-height: 285px;
    border-radius: 10px;
    -webkit-border-radius: 10px 10px;
  }
`

export default Focus
