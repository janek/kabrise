import styled from "styled-components"
import React from "react"

// XXX: https://stackoverflow.com/questions/33223603/using-css-mix-blend-mode-with-a-child-of-a-position-fixed-element
const BlendText = styled.h1`
  mix-blend-mode: exclusion;
  color: white;
  display: block;
  position: fixed;
  top: 0px;
  left: 0px;
`

const Blendor = () => <BlendText> HELLO </BlendText>

export default Blendor
