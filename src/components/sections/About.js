import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useIntl, Link, FormattedMessage } from 'gatsby-plugin-intl';

import { Section, Container } from '@components/global';
import YellowCircle from '@static/icons/yellow_circle.svg';

const About = () => {
	const intl = useIntl();
	return (
		<StaticQuery
			query={graphql`
        query {
          group_photo: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "group_photo" }
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
					<Container>
						<Circles>
							<img src={YellowCircle} />
						</Circles>
						<Grid>
							<div>
								<h2>{intl.formatMessage({ id: 'sections.about.title' })}</h2>
								<p>{intl.formatMessage({ id: 'sections.about.text' })}</p>
							</div>
							<Art>
								<Img fluid={data.group_photo.childImageSharp.fluid} />
							</Art>
						</Grid>
					</Container>
				</Section>
			)}
		/>
	);
};

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
`;

const Art = styled.figure`
  margin: 0;
  max-width: 760px;
  width: 100%;

  .gatsby-image-wrapper {
    max-height: 285px;
    border-radius: 10px;
    -webkit-border-radius: 10px 10px;
  }
`;

const Circles = styled.figure`
  max-height: 100px;
  max-width: 100px;
  margin-left: 40%;
  margin-bottom: -10%;
  
  .img {
    max-height: 285px;
    margin 0 auto;
  }
`;

export default About;
