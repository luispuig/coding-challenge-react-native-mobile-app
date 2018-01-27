import React from "react";

import { Text, View } from "react-native";

class FeedScreen extends React.PureComponent {
  render() {
    const { item } = this.props.navigation.state.params; // Get info from Navigation

    const { title } = item.data;
    return (
      <View>
        <Text>This is Detail Screen</Text>
        <Text>{title}</Text>
      </View>params
    );
  }
}

export default FeedScreen;
