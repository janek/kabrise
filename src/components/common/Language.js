import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "en",
  de: "de"
}

const Language = () => {
  return (
    <div>
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) =>
            languages.map(language => (
              <li class="language" key={language}>
                <a
                  key={language}
                  onClick={() => changeLocale(language)}
                  style={{
                    cursor: `pointer`,
                    opacity: currentLocale === language ? 1 : 0.7
                  }}
                >
                  {languageName[language]}
                </a>
              </li>
            ))
          }
        </IntlContextConsumer>
    </div>
  )
}

export default Language
