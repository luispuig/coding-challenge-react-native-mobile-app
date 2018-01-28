import React from "react";

import ShallowRenderer from "react-test-renderer/shallow"; // ES6
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, render } from "enzyme";

import FeedList from "./FeedList";

configure({ adapter: new Adapter() });

const props = {
  loading: true,
  section: "top",
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
  ],
  feedUpdate: () => {},
  selectItem: () => {},
  feedSectionChange: () => {}
};

it("match on Shallow mode", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<FeedList {...props} />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it("Full render", () => {
  const response = {
    data: {
      children: [
        {
          data: {
            id: "1234",
            title: "title",
            author: "author",
            num_comments: 3,
            score: 2,
            created_utc: 1517115254,
            thumbnail: "thumbnail.jpg",
            url: "http://example.com"
          }
        },
        {
          data: {
            id: "1234",
            title: "title",
            author: "author",
            num_comments: 3,
            score: 2,
            created_utc: 1517115254,
            thumbnail: "",
            url: "http://example.com",
            media: { oembed: { thumbnail_url: "thumbnail_url.jpg" } }
          }
        }
      ]
    }
  };

  window.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ json: () => response }));

  const feedSectionChangeMock = jest.fn();

  const wrapper = shallow(<FeedList {...props} />);

// TODO
  // expect(wrapper.render()).toMatchSnapshot();
});
