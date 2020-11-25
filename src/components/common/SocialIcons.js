import React from "react"
import styled from "styled-components"
// import { useIntl } from "gatsby-plugin-intl"

import InstagramIcon from "@static/icons/instagram.svg"
import FacebookIcon from "@static/icons/facebook.svg"
import YoutubeIcon from "@static/icons/youtube.svg"

import ExternalLink from "@common/ExternalLink"

// TODO: mobile

// TODO: extract "sticky to left/right" from here and from sidebar
export const SocialMediaIconsWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;

  width: 10vw;
  height: 30vh;

  z-index: 1000;
`

export const SocialMediaIcon = styled.a`
  margin: 0 0.75em;
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
      <img src={icon} alt="link" />
    </ExternalLink>
  ))

  return (
    <SocialMediaIconsWrapper hide>
      {socialMediaElements}
    </SocialMediaIconsWrapper>
  )
}

export default SocialIcons
