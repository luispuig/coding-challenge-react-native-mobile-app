import React from "react";
import { connect } from "react-redux";
import { feedUpdate, changeSection } from "../../redux/feed/actions";

import { Text, View, TouchableOpacity } from "react-native";

import Error from "./components/Error"
import FeedList from "./components/FeedList"

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
      <FeedList 
        loading= { (state === 'request') } 
        feed={feed}
        feed_data= {feed_data} 
        feedUpdate={this._feedUpdate} 
      /> 
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
