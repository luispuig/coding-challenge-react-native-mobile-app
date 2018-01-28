import React from "react";

import { Provider } from "react-redux";
import { createMockStore } from "redux-test-utils";

import ShallowRenderer from "react-test-renderer/shallow"; // ES6

import {
  FeedScreen,
  FeedScreenComponent,
  mapDispatchToProps
} from "./FeedScreen";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render, shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

configure({ adapter: new Adapter() });

let testState = {
  feed: {
    section: "fail",
    status: "success",
    error: undefined
  },
  feed_data: [
    {
      id: "1234",
      title: "title",
      author: "author",
      num_comments: 3,
      score: 2,
      date: 1517096810066,
      thumbnail: "thumbnail.jpg",
      url: "http://example.com",
      selectItem: () => {}
    }
  ]
};

let store = createMockStore(testState);

const props = {};

it("match on Shallow mode", () => {
  const component = render(
    <Provider store={store}>
      <FeedScreen {...props} />
    </Provider>,
    store
  );
  const tree = shallowToJson(component, { mode: "shalow" });
  expect(tree).toMatchSnapshot();
});

it("match on Shallow with fail state", () => {
  testState.feed.state = "fail";
  store = createMockStore(testState);

  const component = render(
    <Provider store={store}>
      <FeedScreen {...props} />
    </Provider>,
    store
  );
  const tree = shallowToJson(component, { mode: "shalow" });
  expect(tree).toMatchSnapshot();
});

it("match call internalMethods", () => {
  const fnMock = jest.fn();
  const navigation = { navigate: fnMock };
  const wrapper = shallow(
    <FeedScreenComponent
      {...props}
      {...testState}
      navigation={navigation}
      feedUpdate={fnMock}
      feedSectionChange={fnMock}
    />
  );

  wrapper.instance()._feedUpdate();
  wrapper.instance()._feedSectionChange("top");
  wrapper.instance()._feedItemSelected({ title: "title", url: "url" });

  expect(fnMock.mock.calls).toMatchSnapshot();
});

it("mapDispatchToProps", () => {
  const fnMock = jest.fn();
  const mapDispatchToPropsDATA = mapDispatchToProps(fnMock, {});
  mapDispatchToPropsDATA.feedUpdate();
  mapDispatchToPropsDATA.feedSectionChange({ section: "top" });
  expect(fnMock.mock.calls).toMatchSnapshot();
});
