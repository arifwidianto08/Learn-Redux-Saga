export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

export const FETCH_ORDERS = 'FETCH_ORDERS';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILED = 'FETCH_ORDERS_FAILED';

export const fetchUsers = () => ({ type: FETCH_USERS });
export const usersFetched = data => ({
  type: FETCH_USERS_SUCCESS,
  payload: data
});
export const fetchUsersFailed = () => ({ type: FETCH_USERS_FAILED });

export const fetchOrders = () => ({ type: FETCH_ORDERS });
export const ordersFetched = data => ({
  type: FETCH_ORDERS_SUCCESS,
  payload: data
});
export const fetchOrdersFailed = () => ({ type: FETCH_ORDERS_FAILED });
