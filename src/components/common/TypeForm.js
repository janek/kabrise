import React from "react"
import { ReactTypeformEmbed } from "react-typeform-embed"

class ExamplePopup extends React.Component {
  constructor(props) {
    super(props)
    this.openForm = this.openForm.bind(this)
  }

  openForm() {
    console.log("OpenForm")
    this.typeformEmbed.typeform.open()
  }

  render() {
    return (
      <div className="ExamplePopup">
        <ReactTypeformEmbed
          popup
          autoOpen={false}
          url="https://rrszynka.typeform.com/to/wnNC43"
          hideHeaders
          hideFooter
          buttonText="Go!"
          style={{ top: 100 }}
          ref={tf => {
            this.typeformEmbed = tf
          }}
        />
        <button
          className="btn"
          onClick={this.openForm}
          style={{ cursor: "pointer" }}
        >
          Click to open the popup!
        </button>
        <br />
        <button
          className="btn2"
          onClick={() => console.log()}
          style={{ cursor: "pointer" }}
        >
          HMMM
        </button>
      </div>
    )
  }
}

export default ExamplePopup
