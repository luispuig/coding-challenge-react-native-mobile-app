import React from "react";

import ShallowRenderer from "react-test-renderer/shallow"; // ES6

import DetailScreen from "./DetailScreen";

const props = {
  navigation: {
    state: {
      params: {
        title: "title",
        url: "http://example.com"
      }
    }
  }
};

it("match on Shallow mode", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<DetailScreen {...props} />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it("it should apply navigation title", () => {
  const navigationOptions = DetailScreen.navigationOptions(props);
  expect(navigationOptions).toMatchSnapshot();
});
