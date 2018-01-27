import * as actions from "./actions";

it("Creates Action feedData_Update", () => {
  const action = actions.feedData_Update({
    data: [
      { id: 1, url: "url-1", post: "post-1" },
      { id: 1, url: "url-1", post: "post-1" }
    ]
  });
  expect(action).toMatchSnapshot();
});
