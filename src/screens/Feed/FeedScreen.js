import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { feedUpdate, changeSection } from "../../redux/feed/actions";

import { Text, View, TouchableOpacity } from "react-native";

import Error from "./components/Error";
import FeedList from "./components/FeedList";

class FeedScreen extends React.PureComponent {
  componentDidMount() {
    this._feedUpdate(); // UpdateFeed on load
  }

  _feedUpdate = () => this.props.feedUpdate(); // Dispatch FeedUpdate Action
  _feedItemSelected = ({ title, url }) =>
    this.props.navigation.navigate("Detail", { title, url }); // Navigate to Detail Screen
  _feedSectionChange = section => this.props.feedSectionChange({ section }); // Dispatch Section Change Section

  render() {
    const { feed, feed_data } = this.props;
    const { state, section } = feed;

    if (state === "fail") {
      const { error } = this.props.feed;
      return <Error error={error} feedUpdate={this._feedUpdate} />;
    }

    return (
      <FeedList
        loading={state === "request"}
        section={section}
        feed_data={feed_data}
        feedUpdate={this._feedUpdate}
        selectItem={this._feedItemSelected}
        feedSectionChange={this._feedSectionChange}
      />
    );
  }
}

FeedScreen.propTypes = {
  feed: PropTypes.shape({
    section: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    error: PropTypes.string
  }),
  feed_data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      num_comments: PropTypes.number.isRequired,
      score: PropTypes.number.isRequired,
      date: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  ),
  feedUpdate: PropTypes.func.isRequired,
  feedSectionChange: PropTypes.func.isRequired
};

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
