import React from "react";

import { Text, View, TouchableOpacity } from "react-native";

class FeedScreen extends React.PureComponent {
  render() {
    return (
      <View>
        <Text>This is Feed Screen</Text>
        <TouchableOpacity onPress={ () => this.props.navigation.navigate("Detail")}>
          <Text>Go to detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default FeedScreen;
