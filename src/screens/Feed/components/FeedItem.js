import React from "react";

import { Text, View, TouchableOpacity } from "react-native";

class FeedItem extends React.PureComponent {
  render() {
    const { item } = this.props;

    return (
      <View>
        <TouchableOpacity onPress={() => {}}>
          <View>
            <Text>FeedItem</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default FeedItem;
