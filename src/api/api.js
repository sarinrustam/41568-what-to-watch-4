import axios from "axios";

const TIMEOUT_DURATION = 5000;

const ErrorCodes = {
  UNAUTHORIZED: 401,
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/wtw`,
    timeout: TIMEOUT_DURATION,
    withCredentials: true
  });

  const onSuccess = (response) => {
    return response;
  };

  const onError = (error) => {
    const {response} = error;

    if (response.status === ErrorCodes.UNAUTHORIZED) {
      onUnauthorized(error);
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
