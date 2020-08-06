import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api/api.js";
import {reducer, ActionCreator, ActionType, Operation} from "./comments.js";

const api = createAPI(() => {});

const comments = [{
  "id": 1,
  "user": {
    "name": `Kate Muir`
  },
  "rating": 8.9,
  "comment": `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  "date": `2019-05-08T14:13:56.569Z`
}];

const initialState = {
  errorText: ``,
  isLoading: false,
  comments: [],
};

describe(`Operation of data loading work correctly`, () => {
  it(`Should make a correct API post call to /comments/:movieId`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getState = () => {};
    const rating = 5;
    const comment = `comment`;
    const movieId = 2;
    const operation = Operation.sendComment({movieId, rating, comment});

    apiMock
      .onPost(`/comments/${movieId}`, {rating, comment})
      .reply(200, {});

    return operation(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_ERROR_TEXT,
          payload: ``,
        });
      });
  });

  it(`Should make a correct API get call to /comments/:movieId`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getState = () => {};
    const movieId = 2;
    const operation = Operation.getComments(movieId);

    apiMock
      .onGet(`/comments/${movieId}`)
      .reply(200, comments);

    return operation(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_COMMENTS,
          payload: comments,
        });
      });
  });

  it(`Action setComments working correctly`, () => {
    const newInitialState = {
      errorText: ``,
      isLoading: false,
      comments,
    };

    expect(reducer(initialState, ActionCreator.setComments(comments))).toEqual(newInitialState);
  });

  it(`Action setIsLoading working correctly`, () => {
    const newInitialState = {
      errorText: ``,
      isLoading: true,
      comments: [],
    };

    expect(reducer(initialState, ActionCreator.setIsLoading(true))).toEqual(newInitialState);
  });

  it(`Action setErrorText working correctly`, () => {
    const errorMessage = `error`;
    const newInitialState = {
      errorText: errorMessage,
      isLoading: false,
      comments: [],
    };

    expect(reducer(initialState, ActionCreator.setErrorText(errorMessage))).toEqual(newInitialState);
  });
});
