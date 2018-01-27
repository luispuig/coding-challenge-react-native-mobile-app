const BASE_URL = "https://api.reddit.com/";

const api = {
  getFeed: section => {
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
      .then(data => data.map(item => api._transformItemData(item))) // TRANSFORM API DATA
      .catch(e => {
        //console.log(e);
        throw new Error("Unable to fetch the feed"); // throw generalistic error
      });
  },
  _transformItemData: item => {
    // Get only usuful data on a plain object
    const { id, title, author, num_comments, score, created_utc, url } = item.data;

    // Tranform Date format to Date Object
    const date = api._EpochToDate(created_utc);

    // thumbnail. 1º data object. 2º media object
    let thumbnail = item.data.thumbnail;
    if (
      !thumbnail &&
      item.data.media &&
      item.data.media.oembed &&
      item.data.media.oembed.thumbnail_url
    ) {
      // Preventing data structure errors
      // Check for media thumbnail
      thumbnail = item.data.media.oembed.thumbnail_url;
    }

    return {
      id,
      title,
      author,
      num_comments,
      score,
      created_utc,
      date,
      thumbnail,
      url
    };
  },
  _EpochToDate: epoch => {
    // Aux function to trasform dato form epoch format to Date Object
    if (epoch < 10000000000) epoch *= 1000; // convert to milliseconds (Epoch is usually expressed in seconds, but Javascript uses Milliseconds)
    epoch = epoch + new Date().getTimezoneOffset() * -1; //for timeZone
    return new Date(epoch).getTime();
  }
};

export default api;
