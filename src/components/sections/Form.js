import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import Button from '@common/Button';

const Form = () => {
	// TODO: if there aren't images, remove the StaticQuery
	return (
		<StaticQuery
			query={graphql`
        query {
          dancer_two: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "dancer_two" }
          ) {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      `}
			render={data => (
				<React.Fragment>
					<FooterWrapper>
						<StyledContainer>
							<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
								{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
								<input type="hidden" name="contact" value="contact" />
								<p>
									<label>
										Your Name: <input type="text" name="name" />
									</label>
								</p>
								<p>
									<label>
										Your Email: <input type="email" name="email" />
									</label>
								</p>
								<p>
									<Button type="submit">Send</Button>
								</p>
							</form>
						</StyledContainer>
					</FooterWrapper>
				</React.Fragment>
			)}
		/>
	);
};

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Form;
