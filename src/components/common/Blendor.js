import styled from "styled-components"
import React from "react"

// XXX: https://stackoverflow.com/questions/33223603/using-css-mix-blend-mode-with-a-child-of-a-position-fixed-element
const BlendorBackground = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
  mix-blend-mode: difference;
  display: block;
  position: fixed;
  top: 0px;
  left: 0px;
`

const Blendor = () => (
  <BlendorBackground>
    <span> HELLO </span>
  </BlendorBackground>
)

export default Blendor
