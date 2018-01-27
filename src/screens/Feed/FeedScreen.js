import React from "react";
import { connect } from "react-redux";
import { feedUpdate, changeSection } from "../../redux/feed/actions";

import { Text, View, TouchableOpacity } from "react-native";

import Error from "./components/Error"

class FeedScreen extends React.PureComponent {
  componentDidMount() {
    this._feedUpdate(); // UpdateFeed on load
  }

  _feedUpdate = () => this.props.feedUpdate(); // Dispatch FeedUpdate Action

  render() {
    const { feed, feed_data } = this.props;
    const { state, section } = feed;

    if( state === 'fail') {
      const {error} = this.props.feed;
      return  <Error error={error} feedUpdate={this._feedUpdate} />;
    }

    return (
      <View>
        <Text>This is Feed Screen</Text>
        <Text>State: {state} </Text>
        <Text>Section: {section}</Text>
        <Text>feed_data: {feed_data.toString()}</Text>
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
