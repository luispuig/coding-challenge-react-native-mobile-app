import React from "react";
import { FlatList, RefreshControl } from "react-native";

import FeedItem from "./FeedItem";
import SectionSelector from "./SectionSelector";

export default ({
  loading,
  feed,
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
        section={feed.section}
      />
    )}
  />
);
