import React from "react";

import { Text, View, TouchableOpacity } from "react-native";
import TimeAgo from "react-native-timeago";

class FeedItem extends React.PureComponent {
  _selectItem = () => this.props.selectItem(this.props.item); // Call parent selectItem with item argument

  // TODO: Move time calcs to utils lib
  _EpochToDate = epoch => {
    if (epoch < 10000000000) epoch *= 1000; // convert to milliseconds (Epoch is usually expressed in seconds, but Javascript uses Milliseconds)
    epoch = epoch + new Date().getTimezoneOffset() * -1; //for timeZone
    return new Date(epoch);
  };

  render() {
    const { item } = this.props;
    const { id, title, author, num_comments, score, created_utc } = item.data;
    const date = this._EpochToDate(created_utc); // timestamp format.

    return (
      <View>
        <TouchableOpacity onPress={this._selectItem}>
          <View>
            <Text>{id}</Text>
            <Text>{title}</Text>
            <Text>date: <TimeAgo time={date} /></Text>
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
