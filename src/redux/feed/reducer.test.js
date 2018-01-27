import {
  FEED_UPDATE__REQUEST,
  FEED_UPDATE__FAIL,
  FEED_UPDATE__SUCCESS,
  FEED_SECTION_CHANGE
} from "./actions";

import reducer from "./reducer";

it("Reducer other action", async () => {
  const action = {
    type: "NO-ACTION"
  };
  const state = reducer(undefined, action);
  expect(state).toMatchSnapshot();
});

it("Reducer action: FEED_UPDATE__REQUEST", async () => {
  const action = {
    type: FEED_UPDATE__REQUEST,
    payload: {}
  };
  const state = reducer(undefined, action);
  expect(state).toMatchSnapshot();
});

it("Reducer action: FEED_UPDATE__FAIL", async () => {
  const action = {
    type: FEED_UPDATE__FAIL,
    payload: {}
  };
  const state = reducer(undefined, action);
  expect(state).toMatchSnapshot();
});

it("Reducer action: FEED_UPDATE__FAIL with error", async () => {
  const action = {
    type: FEED_UPDATE__FAIL,
    payload: { error: "error message" }
  };
  const state = reducer(undefined, action);
  expect(state).toMatchSnapshot();
});

it("Reducer action: FEED_UPDATE__SUCCESS", async () => {
  const action = {
    type: FEED_UPDATE__SUCCESS,
    payload: {}
  };
  const state = reducer(undefined, action);
  expect(state).toMatchSnapshot();
});

it("Reducer action: FEED_SECTION_CHANGE", async () => {
  const action = {
    type: FEED_SECTION_CHANGE,
    payload: { section: "top" }
  };
  const state = reducer(undefined, action);
  expect(state).toMatchSnapshot();
});
