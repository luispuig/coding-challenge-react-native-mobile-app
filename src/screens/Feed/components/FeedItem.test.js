import React from "react";

import ShallowRenderer from "react-test-renderer/shallow"; // ES6

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

import FeedItem from "./FeedItem";

configure({ adapter: new Adapter() });

const props = {
  id: "1234",
  title: "title",
  author: "author",
  num_comments: 3,
  score: 2,
  created_utc: 1517115254,
  thumbnail: "thumbnail.jpg",
  url: "http://example.com",
  selectItem: () => {}
};

it("match on Shallow mode", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<FeedItem {...props} />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it("match call selectItemMock", () => {
  const selectItemMock = jest.fn();

  const wrapper = shallow(<FeedItem {...props} selectItem={selectItemMock} />);
  wrapper.instance()._selectItem();

  expect(selectItemMock.mock.calls).toMatchSnapshot();
});
