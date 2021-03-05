import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Container } from "@components/global"
import ExternalLink from "@common/ExternalLink"
import Button from "@common/Button"

const Form = () => {
  return (
    <section id="contact">
      <Container>
        <hr />
        <Grid>
          <div>
            <h2>Be part of the journey</h2>
            <p>
              If you are in need of a space or want to collaborate with us.
              Let’e get in touch….
            </p>
          </div>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
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
              <label>
                Message: <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <Button type="submit">get in touch</Button>
            </p>
          </form>
        </Grid>
      </Container>
    </section>
  )
}

// TODO: import and share code, instead of having so many copies
const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  align-items: center;
  justify-items: center;
  margin: 24px 0;
  padding-top: 50px;
  padding-bottom: 50px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;
  }
`

export default Form
