import React from "react";

import { WebView } from "react-native";

class DetailScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });

  render() {
    const { title, url } = this.props.navigation.state.params; // Get info from Navigation

    return <WebView source={{ uri: url }} />;
  }
}

export default DetailScreen;
