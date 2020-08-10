import {extend, AppRoute} from "../../utils/utils";
import history from "../../history";

const initialState = {
  errorText: ``,
  isLoading: false,
  comments: [],
};

const ActionType = {
  SET_ERROR_TEXT: `SET_ERROR_TEXT`,
  SET_IS_LOADING: `SET_IS_LOADING`,
  SET_COMMENTS: `SET_COMMENTS`,
};

const ActionCreator = {
  setErrorText: (errorText) => {
    return {
      type: ActionType.SET_ERROR_TEXT,
      payload: errorText,
    };
  },
  setIsLoading: (value) => {
    return {
      type: ActionType.SET_IS_LOADING,
      payload: value,
    };
  },
  setComments: (comments) => {
    return {
      type: ActionType.SET_COMMENTS,
      payload: comments
    };
  },
};

const Operation = {
  sendComment: ({movieId, rating, comment}) => (dispatch, getState, api) => {
    return api.post(`/comments/${movieId}`, {rating, comment})
      .then(() => {
        history.push(`${AppRoute.FILMS}/${movieId}`);
        dispatch(ActionCreator.setErrorText(``));
      })
      .catch(({response}) => {
        dispatch(ActionCreator.setErrorText(response.data.error));
      });
  },
  getComments: (movieId) => (dispatch, getState, api) => {
    return api.get(`/comments/${movieId}`)
      .then((response) => {
        const comments = response.data;
        dispatch(ActionCreator.setComments(comments));
      })
      .catch(() => {});
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ERROR_TEXT:
      return extend(state, {
        errorText: action.payload,
      });
    case ActionType.SET_IS_LOADING:
      return extend(state, {
        isLoading: action.payload
      });
    case ActionType.SET_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator, Operation};
