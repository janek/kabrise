import styled from "styled-components"
// import { FlexGrid, FlexGridItem } from "baseui/flex-grid"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { Container } from "@components/global"

//TODO: clean up styling, make sure non-square photos fill the sqare
const Image = styled(Img)`
  height: 100%;
`

const A = styled.a`
  width: 100%;
  height: 100%;
`

const nodeURL = "https://www.instagram.com/p"

const Instagram = () => {
  const {
    allInstaNode: { edges }
  } = useStaticQuery(graphql`
    {
      allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 9) {
        edges {
          node {
            id
            caption
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  // TODO: check for the mobile flag and only show 3 pics if the grid is a single column
  const renderImages = () => {
    const images = edges.map(({ node }) => {
      const {
        id,
        caption,
        localFile: { childImageSharp }
      } = node
      return (
        <A key={id} href={`${nodeURL}/${id}`}>
          <Image
            style="height:100%"
            loading="lazy"
            alt={caption || ""}
            fluid={childImageSharp.fluid}
          />
        </A>
      )
    })
    return images
  }

  return (
    <section id="projects">
      <Container>
        <h3> Instagram </h3>
        <h1> Follow us </h1>
        <Grid>{renderImages()}</Grid>
      </Container>
    </section>
  )
}

const Grid = styled.div`
  width: 60vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  grid-gap: 40px;
  align-items: center;
  justify-items: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
  }
`

export default Instagram
