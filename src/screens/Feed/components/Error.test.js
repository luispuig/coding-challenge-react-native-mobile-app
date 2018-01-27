import React from "react";

import ShallowRenderer from "react-test-renderer/shallow"; // ES6

import Error from "./Error";

const props = {
    error: 'error message',
    feedUpdate: () => {},
};


it("match on Shallow mode", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Error {...props} />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});



