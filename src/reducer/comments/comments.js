import {extend} from "../../utils/utils.js";

const initialState = {
  errorText: ``,
  isLoading: false,
};

const ActionType = {
  SET_ERROR_TEXT: `SET_ERROR_TEXT`,
  SET_IS_LOADING: `SET_IS_LOADING`,
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
};

const Operation = {
  sendComment: ({movieId, rating, comment}, onSuccess) => (dispatch, getState, api) => {
    return api.post(`/comments/${movieId}`, {rating, comment})
      .then(() => {
        onSuccess();
      })
      .catch(({response}) => {
        dispatch(ActionCreator.setErrorText(response.data.error));
      });
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
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator, Operation};
