export const FEED_DATA__UPDATE = "FEED_DATA__UPDATE";

export const feedData_Update = ({ data }) => ({
  type: FEED_DATA__UPDATE,
  payload: { data }
});
