import React from "react";

import { WebView } from "react-native";

class DetailScreen extends React.PureComponent {
  // TODO. Change Navigation title with Item title

  render() {
    const { item } = this.props.navigation.state.params; // Get info from Navigation
    const { url } = item.data;

    return <WebView source={{ uri: url }} />;
  }
}

export default DetailScreen;
