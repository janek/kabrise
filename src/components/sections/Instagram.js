import styled from "styled-components"
// import { FlexGrid, FlexGridItem } from "baseui/flex-grid"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"

const Image = styled(Img)`
  object-fit: "cover";
  object-position: "100% 0";
  width: "100%";
  height: "100%";
  maxheight: "25rem";
`

const A = styled.a`
  width: 100%;
  height: 100%;
`

const nodeURL = "https://www.instagram.com/p"

const Instagram = () => {
  const {
    allInstaNode: { edges },
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

  const renderImages = () => {
    const images = edges.map(({ node }) => {
      const {
        id,
        caption,
        localFile: { childImageSharp },
      } = node
      return (
        <A key={id} href={`${nodeURL}/${id}`}>
          <Image
            loading="lazy"
            alt={caption || ""}
            fluid={childImageSharp.fluid}
          />
        </A>
      )
    })
    return images
  }

  return <Grid>{renderImages()}</Grid>
}

const Grid = styled.div`
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
