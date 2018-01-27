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
    const {id, title, author, num_comments, score, created_utc} = item.data;
    
    return (
      <View>
        <TouchableOpacity onPress={this._selectItem}>
          <View>
            <Text>{id}</Text>
            <Text>{title}</Text>
            <Text>date: {created_utc}</Text>
            <Text>{author}</Text>
            <Text>{num_comments} comments</Text>
            <Text>score: {score}</Text>
            <Text>-------------------------</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default FeedItem;
