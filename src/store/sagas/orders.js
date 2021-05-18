import { put } from "redux-saga/effects";
import axios from "../../axios-orders";

import {
  burgerOrderStart,
  burgerOrderSuccess,
  burgerOrderFail,
  ordersFetchStart,
  OrdersFetchedSuccess,
  OrdersFetchedFail,
} from "../actions/order";

export function* burgerOrderSaga(action) {
  yield put(burgerOrderStart());
  try {
    const response = yield axios.post(
      "/orders.json?auth=" + action.token,
      action.orderData
    );
    yield put(burgerOrderSuccess(response.data.name, action.orderData));
  } catch (error) {
    yield put(burgerOrderFail(error));
  }
}

export function* fetchedOrdersSaga(action) {
  yield put(ordersFetchStart());
  const queryParams =
    "?auth=" +
    action.token +
    '&orderBy="userId"&equalTo="' +
    action.userId +
    '"';
  try {
    const response = yield axios.get("/orders.json" + queryParams);
    const fetchedOrders = [];
    for (let key in response.data) {
      fetchedOrders.push({
        ...response.data[key],
        id: key,
      });
    }
    yield put(OrdersFetchedSuccess(fetchedOrders));
  } catch (error) {
    yield put(OrdersFetchedFail(error));
  }
}
