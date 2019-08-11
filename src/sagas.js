import { call, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_USERS,
  usersFetched,
  FETCH_ORDERS,
  ordersFetched,
  fetchOrdersFailed
} from './actions';
import fetchData from './utils/fetchData';
import firebase from './configs/Firebase';
import { firestoreCollection } from './utils/response';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData() {
  try {
    // do api call

    const data = yield call(fetchData);
    yield put(usersFetched(data));
  } catch (e) {
    console.log(e);
  }
}

function* getOrdersData() {
  try {
    // do api call
    const getOrders = () => firebase.getCollection('orders');
    const ordersSnapshot = yield call(getOrders);
    const orders = firestoreCollection(ordersSnapshot);
    yield put(ordersFetched(orders.data));
  } catch (e) {
    yield put(fetchOrdersFailed());
  }
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export function* usersSaga() {
  yield takeLatest(FETCH_USERS, getApiData);
}

export function* ordersSaga() {
  yield takeLatest(FETCH_ORDERS, getOrdersData);
}
