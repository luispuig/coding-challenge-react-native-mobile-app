const BASE_URL = "https://api.reddit.com/";

const api = {
  getFeed: function(section) {
    const channel = "programming";
    const requestUrl = `${BASE_URL}/r/${channel}/${section}.json`;

    return fetch(requestUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.data.children !== undefined) return data.data.children;
        else throw new Error("Unable to fetch the feed"); // throw generalistic error
      })
      .catch(e => {
        throw new Error("Unable to fetch the feed"); // throw generalistic error
      });
  }
};

export default api;
