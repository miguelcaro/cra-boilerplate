import decode from 'jwt-decode';
import { http } from 'libs';

// Token string name
const TOKEN_NAME = 'token';

export const getToken = () => {
  // Retrieves the user token from localStorage
  return localStorage.getItem(TOKEN_NAME);
};

export const loggedIn = () => {
  // Checks if there is a saved token and it's still valid
  const token = getToken(); // Getting token from localstorage
  return !!token;
};

export const setToken = (token) => {
  // Saves user token to localStorage
  localStorage.setItem(TOKEN_NAME, token);
};

export const logout = () => {
  // Clear user token from localStorage
  localStorage.removeItem(TOKEN_NAME);
};

export const getProfile = () => {
  // Using jwt-decode to decode the token
  return decode(getToken());
};

const checkStatus = (response) => {
  // raises an error in case response status is not a success
  if (response.status >= 200 && response.status < 300) {
    // Success status lies between 200 to 300
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const unauthorizedHandler = ({ response }) => {
  if (response.status === 401) {
    logout();
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

export const apiCall = (method, url, options) => {
  // performs api calls sending the required authentication headers
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  // Setting Authorization header if logged in
  // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
  if (loggedIn()) {
    headers.Authorization = `Bearer ${getToken()}`;
  }

  return http[method](url, {
    headers,
    ...options,
  })
    .then(checkStatus)
    .then((response) => response)
    .catch(unauthorizedHandler);
};
