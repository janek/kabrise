import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Section, Container } from "@components/global"

// TODO: clean nearly everything from here

const Team = () => (
	<StaticQuery
		query={graphql`
			query {
				art_team: file(
					sourceInstanceName: { eq: "art" }
					name: { eq: "temp_logo" }
				) {
					childImageSharp {
						fluid(maxWidth: 1600) {
							...GatsbyImageSharpFluid_withWebp_tracedSVG
						}
					}
				}
			}
		`}
		render={data => (
			<LogoContainer>
				<Img fluid={data.art_team.childImageSharp.fluid} />
			</LogoContainer>
		)}
	/>
)

const LogoContainer = styled.div`
	width: 100%;
	height: 100%;
	max-width: 100px;
	max-height: 100px;

	@media (max-width: ${props => props.theme.screen.sm}) {
		max-width: 60px;
		max-height: 60px;
	}
`

const TeamGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 200px);
	grid-template-rows: min-content;
	grid-gap: 50px;
	justify-content: space-between;
	width: 60%;
	margin-top: 0px;

	@media (max-width: ${props => props.theme.screen.lg}) {
		justify-content: start;
	}

	@media (max-width: ${props => props.theme.screen.md}) {
		width: 100%;
		grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
	}

	@media (max-width: ${props => props.theme.screen.xs}) {
		grid-gap: 24px;
	}
`

const Art = styled.figure`
	width: 800px;
	margin: -80px 0;
	position: absolute;
	top: 0;
	left: 70%;

	@media (max-width: ${props => props.theme.screen.lg}) {
		top: 20%;
	}

	@media (max-width: ${props => props.theme.screen.md}) {
		display: none;
	}
`

const ArtMobile = styled.figure`
	width: 100%;
	margin: 0;
	display: none;
	margin-top: 64px;
	margin-bottom: -60%;

	@media (max-width: ${props => props.theme.screen.md}) {
		display: block;
	}
`

const Title = styled.p`
	margin-top: 16px;
	color: ${props => props.theme.color.black.regular};
`

const Subtitle = styled.p`
	${props => props.theme.font_size.small};
	color: ${props => props.theme.color.black.light};
`

export default Team
