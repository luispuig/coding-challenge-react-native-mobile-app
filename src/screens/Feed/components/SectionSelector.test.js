import React from "react";

import ShallowRenderer from "react-test-renderer/shallow"; // ES6

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

import SectionSelector from "./SectionSelector";

configure({ adapter: new Adapter() });

const props = {
  section: "top",
  feedSectionChange: () => {}
};

it("match on Shallow mode new", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SectionSelector {...props} section="new" />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it("match on Shallow mode top", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SectionSelector {...props} section="top" />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it("match on Shallow mode controversial", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SectionSelector {...props} section="controversial" />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it("match on Shallow mode hot", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SectionSelector {...props} section="hot" />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it("call methods", () => {
  const feedSectionChangeMock = jest.fn();

  const wrapper = shallow(
    <SectionSelector {...props} feedSectionChange={feedSectionChangeMock} />
  );
  wrapper.instance()._changeSection_New();
  wrapper.instance()._changeSection_Top();
  wrapper.instance()._changeSection_Controversial();
  wrapper.instance()._changeSection_Hot();

  expect(feedSectionChangeMock.mock.calls).toMatchSnapshot();
});
