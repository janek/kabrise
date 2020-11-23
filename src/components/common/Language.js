import React from "react"
import styled from "styled-components"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "en",
  de: "de",
}

const LineSeparator = styled.div`
  background-color: white;
  margin: 0 auto;
  width: 1px;
  height: 40px;
`

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ currentLocale }) => (
          <div>
            <li class="language" key={"en"}>
              <a
                key={"en"}
                onClick={() => changeLocale("en")}
                style={{
                  cursor: `pointer`,
                  opacity: currentLocale === "en" ? 1 : 0.7,
                }}
              >
                {"en".toUpperCase()}
              </a>
            </li>
            <LineSeparator />
            <li class="language" key={"de"}>
              <a
                key={"de"}
                onClick={() => changeLocale("de")}
                style={{
                  cursor: `pointer`,
                  opacity: currentLocale === "de" ? 1 : 0.7,
                }}
              >
                {"de".toUpperCase()}
              </a>
            </li>
          </div>
        )}
      </IntlContextConsumer>
    </div>
  )
}

export default Language
