import reddit from "../../services/reddit";
import { feedData_Update } from "../feed_data/actions";

export const FEED_UPDATE__REQUEST = "FEED_UPDATE__REQUEST";
export const FEED_UPDATE__FAIL = "FEED_UPDATE__FAIL";
export const FEED_UPDATE__SUCCESS = "FEED_UPDATE__SUCCESS";

export const FEED_SECTION_CHANGE = "FEED_SECTION_CHANGE";

export const changeSection = ({ section }) => {
  return (dispatch, getState) => {
    // TODO changeSection Action Creator
  };
};

export const feedUpdate = () => {
  return (dispatch, getState) => {
    // Set City State to Fetching Request
    dispatch(feedUpdate_Request());

    const state = getState();
    const { section } = state.feed; // Actual section needed for Feeding Service
    // Fetch Promise
    return reddit.getFeed(section).then(
      data => {
        dispatch(feedUpdate_Success());
        dispatch(feedData_Update({ data })); // Update feed_data store
      },
      error => {
        dispatch(feedUpdate_Fail({ error: error.message }));
      }
    );
  };
};

export const feedUpdate_Request = () => ({
  type: FEED_UPDATE__REQUEST,
  payload: {}
});

export const feedUpdate_Fail = ({ error }) => ({
  type: FEED_UPDATE__FAIL,
  payload: { error }
});

export const feedUpdate_Success = () => ({
  type: FEED_UPDATE__SUCCESS,
  payload: {}
});

export const feedSectionChange = ({ section }) => ({
  type: FEED_SECTION_CHANGE,
  payload: { section }
});
