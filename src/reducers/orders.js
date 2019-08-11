import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILED
} from '../actions';
const initialState = {
  data: [],
  isLoading: false
};
function reducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case FETCH_ORDERS:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false
      };
    case FETCH_ORDERS_FAILED:
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
