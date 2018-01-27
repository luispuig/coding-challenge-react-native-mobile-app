import {
  FEED_UPDATE__REQUEST,
  FEED_UPDATE__FAIL,
  FEED_UPDATE__SUCCESS,
  FEED_SECTION_CHANGE
} from "./actions";

const initialState = {
  section: "new", // new | top | hot | controversial
  state: "request", // request | fail | success
  error: undefined // Error message
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FEED_UPDATE__REQUEST:
      /* Reset state before fetch request */
      return { ...state, state: "request" };

    case FEED_UPDATE__FAIL:
      /* Update Fail fields */
      if (action.payload.error === undefined) return state;
      return { ...state, state: "fail", error: action.payload.error };

    case FEED_UPDATE__SUCCESS:
      /* Update Success fields */
      return { ...state, state: "success" };

    case FEED_SECTION_CHANGE:
      /* Chage Section */
      return { ...state, section: action.payload.section };

    default:
      return state;
  }
};

export default reducer;
