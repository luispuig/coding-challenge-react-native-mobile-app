import { combineReducers } from "redux";

import feed from "./feed/reducer";
import feed_data from "./feed_data/reducer";

export default combineReducers({
  feed,
  feed_data
});
