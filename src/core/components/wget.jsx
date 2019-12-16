import React from "react"
import PropTypes from "prop-types"
import wgetify from "core/wgetify"

export default class Wget extends React.Component {
  static propTypes = {
    request: PropTypes.object.isRequired
  }

  handleFocus(e) {
    e.target.select()
    document.execCommand("copy")
  }

  render() {
    let { request } = this.props
    let wget = wgetify(request)

    return (
      <div>
        <h4>Wget</h4>
        <div className="copy-paste">
          <textarea onFocus={this.handleFocus} readOnly={true} className="wget" style={{ whiteSpace: "normal" }} value={wget}></textarea>
        </div>
      </div>
    )
  }

}
