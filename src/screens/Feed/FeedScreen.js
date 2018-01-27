import React from "react";
import { connect } from "react-redux";

import { feedUpdate, changeSection } from "../../redux/feed/actions";

import { Text, View, TouchableOpacity } from "react-native";

import reddit from "../../services/reddit";
class FeedScreen extends React.PureComponent {
  componentDidMount() {
    // Testing reddit service
    reddit
      .getFeed("new")
      .then(data => console.log(data), error => console.log(error));

    reddit
      .getFeed("top")
      .then(data => console.log(data), error => console.log(error));
  }

  render() {
    const { feed } = this.props;
    const { state, section } = feed;

    return (
      <View>
        <Text>This is Feed Screen</Text>
        <Text>State: {state} </Text>
        <Text>Section: {section}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Detail")}
        >
          <Text>Go to detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({ feed, feed_data }) => ({
  feed,
  feed_data
});

const mapDispatchToProps = (dispatch, props) => ({
  feedUpdate: () => dispatch(feedUpdate()),
  feedSectionChange: data => dispatch(changeSection(data)),
  ...props // Allow overwriting for testing porpuse
});

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(FeedScreen);
