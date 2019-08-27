import React from "react";

class GifSearch extends React.Component {
  constructor() {
    super();
    this.state = { search: "" }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.findGifs(this.state.search)

  }

  render () {
    return (
      <div>
        <form on Submit={this.handleSubmit}>
          <input type="text" value={this.state.search} onChange={event.setState({search: event.target.value})} />
        </form>
      </div>
    )
  }
}

export default GifSearch
