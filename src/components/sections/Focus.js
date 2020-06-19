import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Section, Container } from "@components/global"
import YoutubeIcon from "@static/icons/youtube.svg"

const Focus = () => (
  <StaticQuery
    query={graphql`
      query {
        five_people_indoors: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "five_people_indoors" }
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
              <img src={YoutubeIcon} />
            </Circles>
            <Grid>
              <div>
                <h2>Wo der Fokus liegt</h2>
                <p>
                  In unserem Format “Heilstätte Zukunft” laden wir Expert*innen
                  für einen gemeinsamen Diskurs ein. Filmisch inszeniert stellen
                  wir konkrete Lösungsansätze und Projekte vor, die mit den
                  gewonnenen Erkenntnissen bereits erfolgreich arbeiten. Zum
                  Start des Formates thematisieren wir den Zusammenhang zwischen
                  Klimawandel und Clubkultur sowie der Theater- und Kunstszene.
                </p>
              </div>
              <Art>
                <Img fluid={data.five_people_indoors.childImageSharp.fluid} />
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

  .gatsby-image-wrapper {
    max-height: 285px;
  }
`

export default Focus
