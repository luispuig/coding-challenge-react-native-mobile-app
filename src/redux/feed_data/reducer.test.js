import { FEED_DATA__UPDATE } from "./actions";

import reducer from "./reducer";

it("Reducer other action", async () => {
  const action = {
    type: "NO-ACTION"
  };
  const state = reducer(undefined, action);
  expect(state).toMatchSnapshot();
});

it("Reducer action: FEED_DATA__UPDATE", async () => {
  const action = {
    type: FEED_DATA__UPDATE,
    payload: {
      data: [
        { id: 1, url: "url-1", post: "post-1" },
        { id: 1, url: "url-1", post: "post-1" }
      ]
    }
  };
  const state = reducer(undefined, action);
  expect(state).toMatchSnapshot();
});

it("Reducer action: FEED_DATA__UPDATE with no data", async () => {
  const action = {
    type: FEED_DATA__UPDATE,
    payload: {}
  };
  const state = reducer(undefined, action);
  expect(state).toMatchSnapshot();
});
