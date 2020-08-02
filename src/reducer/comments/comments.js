const Operation = {
  sendComment: ({movieId, rating, comment}, onSuccess, onError) => (dispatch, getState, api) => {
    return api.post(`/comments/${movieId}`, {rating, comment})
      .then(() => {
        onSuccess();
      })
      .catch(({response}) => {
        onError(response.data.error);
      });
  },
};

export {Operation};
