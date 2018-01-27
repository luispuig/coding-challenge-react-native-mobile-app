import React from "react";

import { Text, View, TouchableOpacity } from "react-native";

class FeedItem extends React.PureComponent {
  _selectItem = () => {
    // Call parent selectItem with item argument
    const { selectItem, item } = this.props;
    selectItem(item);
  };

  render() {
    const { item } = this.props;
    const { title } = item.data;
    return (
      <View>
        <TouchableOpacity onPress={this._selectItem}>
          <View>
            <Text>{title}</Text>
            <Text>-------------------------</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default FeedItem;
