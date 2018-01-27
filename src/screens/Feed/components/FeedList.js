import React from "react";
import PropTypes from "prop-types";

import { FlatList, RefreshControl } from "react-native";

import FeedItem from "./FeedItem";
import SectionSelector from "./SectionSelector";

const FeedList = ({
  loading,
  section,
  feed_data,
  feedUpdate,
  selectItem,
  feedSectionChange
}) => (
  <FlatList
    data={feed_data}
    keyExtractor={item => item.id}
    renderItem={({ item }) => <FeedItem {...item} selectItem={selectItem} />}
    refreshing={loading}
    refreshControl={
      <RefreshControl refreshing={loading} onRefresh={feedUpdate} />
    }
    ListHeaderComponent={() => (
      <SectionSelector
        feedSectionChange={feedSectionChange}
        section={section}
      />
    )}
  />
);

FeedList.propTypes = {
  loading: PropTypes.bool.isRequired,
  section: PropTypes.string.isRequired,
  feed_data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      num_comments: PropTypes.number.isRequired,
      score: PropTypes.number.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      thumbnail: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  ),
  feedUpdate: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  feedSectionChange: PropTypes.func.isRequired
};

export default FeedList;
