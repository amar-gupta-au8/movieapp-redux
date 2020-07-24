import { ACTIONS } from '../Actions/index';

const { MAKE_REQUEST, ERROR, GET_DATA, CLEAR_DATA } = ACTIONS;

const intialState = {
  loading: true,
  movies: [],
};
export default (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MAKE_REQUEST:
      return { loading: true, movies: [...state.movies] };
    case GET_DATA:
      return { loading: false, movies: [...state.movies, payload] };
    case CLEAR_DATA:
      return { loading: true, movies: [] };
    case ERROR:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
