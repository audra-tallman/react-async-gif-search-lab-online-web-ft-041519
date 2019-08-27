import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = { gifs: [] }
  }

  findGifs = (query = "dolphins") => {
    fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
    .then(res => res.json())
    .then(data => {
      this.setState({ gifs: data.images.original.url })
    })
  }

  componentDidMount() {
    this.findGifs()
  }

  render() {
    return
    <div>
      <GifSearch findGifs={this.findGifs} />
      <GifList gifs={this.state.gifs} />
    </div>
  }
}

export default GifListContainer
