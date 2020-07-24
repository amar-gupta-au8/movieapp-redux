import axios from 'axios';
import { ACTIONS } from '../Actions/index';
import { POPULAR_BASE_URL, SEARCH_BASE_URL } from '../Config/index';
const { MAKE_REQUEST, ERROR, GET_DATA, CLEAR_DATA } = ACTIONS;

export const makeRequest = () => ({
  type: MAKE_REQUEST,
});
export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});
export const clearData = () => ({
  type: CLEAR_DATA,
});
export const error = (payload) => ({
  type: ERROR,
  payload,
});
export const fetchData = () => {
  return (dispatch) => (
    // eslint-disable-next-line
    dispatch(makeRequest),
    axios
      .get(POPULAR_BASE_URL)
      .then((res) => res.data.results.map((data) => dispatch(getData(data))))
      .catch((err) => dispatch(error(err)))
  );
};
export const searchData = (userInput) => {
  return (dispatch) =>
    axios
      .get(`${SEARCH_BASE_URL}${userInput}`)
      .then((res) => res.data.results.map((data) => dispatch(getData(data))))
      .catch((err) => dispatch(error(err)));
};
