import React from "react";

import { Image, Text, TouchableOpacity, StyleSheet, View } from "react-native";
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

    let thumbnail = item.data.thumbnail; // thumbnail
    if (
      !thumbnail &&
      item.data.media &&
      item.data.media.oembed &&
      item.data.media.oembed.thumbnail_url
    ) {
      // Preventing data structure errors
      // Check for media thumbnail
      thumbnail = item.data.media.oembed.thumbnail_url;
    }

    return (
      <View>
        <TouchableOpacity onPress={this._selectItem}>
          <View style={styles.container}>
            <View style={styles.image}>
              {thumbnail != false && (
                <Image source={{ uri: thumbnail }} style={{ flex: 1 }} />
              )}
            </View>
            <View style={styles.content}>
              <Text style={styles.date}>
                <TimeAgo time={date} />
              </Text>
              <Text style={styles.title}>{title}</Text>
              <View style={styles.info}>
                <Text style={styles.author}>{author}</Text>
                <Text style={styles.score}>Score: {score}</Text>
                <Text style={styles.comments}>{num_comments} comments</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default FeedItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginBottom: 1,
    padding: 5,
    flexDirection: "row"
  },
  image: {
    flex: 2,
    padding: 5
  },
  content: {
    flex: 7
  },
  date: {
    textAlign: "right",
    margin: 3,
    fontSize: 11
  },
  title: {
    margin: 3,
    fontWeight: "bold"
  },
  info: {
    margin: 3,
    flexDirection: "row"
  },
  author: {
    margin: 3,
    flex: 4,
    fontSize: 10
  },
  score: {
    margin: 3,
    flex: 3,
    fontSize: 10
  },
  comments: {
    margin: 3,
    flex: 3,
    fontSize: 10
  }
});
