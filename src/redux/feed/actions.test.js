import * as actions from "./actions";

it("Creates Action changeSection", () => {
  const actionCreator = actions.changeSection({ section: "top" });
  const dispatchMock = jest.fn();

  const apiCallPromise = actionCreator(dispatchMock);

  expect(dispatchMock.mock.calls).toMatchSnapshot();
});

it("Creates Action feedUpdate", async () => {
  const response = {
    data: {
      children: [
        {
          data: {
            id: "1234",
            title: "title",
            author: "author",
            num_comments: 3,
            score: 2,
            created_utc: 1517115254,
            thumbnail: "thumbnail.jpg",
            url: "http://example.com"
          }
        },
        {
          data: {
            id: "1234",
            title: "title",
            author: "author",
            num_comments: 3,
            score: 2,
            created_utc: 1517115254,
            thumbnail: "",
            url: "http://example.com",
            media: { oembed: { thumbnail_url: "thumbnail_url.jpg" } }
          }
        }
      ]
    }
  };

  window.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ json: () => response }));

  const actionCreator = actions.feedUpdate();
  const dispatchMock = jest.fn();

  const apiCallPromise = actionCreator(dispatchMock, () => ({
    feed: { section: "top" }
  }));
  await apiCallPromise;

  expect(dispatchMock.mock.calls).toMatchSnapshot();
});

it("Creates Action feedUpdate with error", async () => {
  const response = {
    data: {
      children2: []
    }
  };

  window.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ json: () => response }));

  const actionCreator = actions.feedUpdate();
  const dispatchMock = jest.fn();

  const apiCallPromise = actionCreator(dispatchMock, () => ({
    feed: { section: "top" }
  }));
  await apiCallPromise;

  expect(dispatchMock.mock.calls).toMatchSnapshot();
});

it("Creates Action feedUpdate_Request", () => {
  const action = actions.feedUpdate_Request();
  expect(action).toMatchSnapshot();
});

it("Creates Action feedUpdate_Fail", () => {
  const action = actions.feedUpdate_Fail({ error: "error message" });
  expect(action).toMatchSnapshot();
});

it("Creates Action feedUpdate_Success", () => {
  const action = actions.feedUpdate_Success();
  expect(action).toMatchSnapshot();
});

it("Creates Action feedSectionChange", () => {
  const action = actions.feedSectionChange({ section: "top" });
  expect(action).toMatchSnapshot();
});
