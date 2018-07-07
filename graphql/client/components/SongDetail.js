import React, { Component } from "react";
import { graphql } from "react-apollo";

import FetchSong from "../queries/FetchSong";

class SongDetail extends Component {
  render() {
    return (
      <div>
        <h3>Song Detail</h3>
      </div>
    );
  }
}

export default graphql(FetchSong, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
