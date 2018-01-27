import React from "react";
import { StackNavigator } from "react-navigation";

import FeedScreen from "./screens/Feed/FeedScreen";
import DetailScreen from "./screens/Detail/DetailScreen";

const RootNavigator = StackNavigator({
  Feed: {
    screen: FeedScreen,
    navigationOptions: {
      headerTitle: "News Feed"
    }
  },
  Detail: {
    screen: DetailScreen
  }
});

export default RootNavigator;
