import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED
} from '../actions';
const initialState = {
  data: [],
  isLoading: false
};
function reducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case FETCH_USERS:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        data: [],
        isLoading: false
      };

    default:
      return state;
  }
}

export default reducer;
