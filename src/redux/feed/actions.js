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
    // TODO feedUpdate Action Creator
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
