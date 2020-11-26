import styled from "styled-components"

// XXX: https://stackoverflow.com/questions/33223603/using-css-mix-blend-mode-with-a-child-of-a-position-fixed-element
const Blendor = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
  mix-blend-mode: difference;
  display: block;
  position: fixed;
  top: 0px;
  left: 0px;
`

export default Blendor
