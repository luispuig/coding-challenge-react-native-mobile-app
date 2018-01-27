import React from "react";
import PropTypes from "prop-types";

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

DetailScreen.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

export default DetailScreen;
