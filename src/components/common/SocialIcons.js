import React from "react"
import styled from "styled-components"
// import { useIntl } from "gatsby-plugin-intl"

import InstagramIcon from "@static/icons/instagram.svg"
import FacebookIcon from "@static/icons/facebook.svg"
import YoutubeIcon from "@static/icons/youtube.svg"

import ExternalLink from "@common/ExternalLink"

// TODO: mobile
// TODO unify colors
// TODO: extract styles for "sticky to left/right" from here and from sidebar

export const SocialMediaIconsWrapper = styled.div`
  position: fixed;
  display: flex;
  mix-blend-mode: exclusion;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }

  flex-direction: column;
  justify-content: space-between;
  bottom: 0;
  right: 0;
  width: 4vw;
  z-index: 1000;

  a {
    margin: 0 auto;
  }
`

export const SocialMediaIcon = styled.img`
  width: 40px;
  height: 40px;
  margin: 10px 0px;
`

const SocialIcons = () => {
  const socialMediaLinksAndIcons = [
    {
      icon: InstagramIcon,
      link: "https://instagram.com/kabrise_"
    },
    {
      icon: YoutubeIcon,
      link: "https://www.youtube.com/channel/UCue1EZ2sBVBZKEChwmLu2mg"
    },
    {
      icon: FacebookIcon,
      link: "https://www.facebook.com/kabrisekollektiv"
    }
  ]

  const socialMediaElements = socialMediaLinksAndIcons.map(({ icon, link }) => (
    <ExternalLink key={link} href={link} title={link}>
      <SocialMediaIcon src={icon} alt="link" />
    </ExternalLink>
  ))

  return (
    <SocialMediaIconsWrapper hide>
      {socialMediaElements}
    </SocialMediaIconsWrapper>
  )
}

export default SocialIcons
