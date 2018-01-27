import React from "react";
import PropTypes from "prop-types";

import { Image, Text, TouchableOpacity, StyleSheet, View } from "react-native";
import TimeAgo from "react-native-timeago";

class FeedItem extends React.PureComponent {
  _selectItem = () => {
    const { selectItem, title, url } = this.props;
    selectItem({ title, url }); // Call parent selectItem with item title and item url
    // It can be improved using Redux to manage selected Item
  };

  render() {
    const { title, author, num_comments, score, date, thumbnail } = this.props;

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

Error.propTypes = {
  selectItem: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  num_comments: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  thumbnail: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

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
