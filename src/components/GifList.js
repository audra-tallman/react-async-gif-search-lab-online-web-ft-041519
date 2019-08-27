import React from "react";

const GifList = gifs => (
  <ul>
    {gifs.map(({ key, src })
      <li>{key}-{src}</li>
    )}
  <ul>
)

export default GifList
