import { FEED_DATA__UPDATE } from "./actions";

const initialState = []; // Array of news

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FEED_DATA__UPDATE:
      if (action.payload.data === undefined) return state;
      return action.payload.data;

    default:
      return state;
  }
};

export default reducer;
