import React, { Component } from "react";
import { graphql } from "react-apollo";

import FetchSong from "../queries/FetchSong";

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{song.title}</h3>
      </div>
    );
  }
}

export default graphql(FetchSong, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
