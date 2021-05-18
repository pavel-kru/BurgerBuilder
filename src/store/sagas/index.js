import { takeEvery, all, takeLatest } from "redux-saga/effects";

import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  authCheckStateSaga,
} from "./auth";
import { initIngredientsSaga } from "./burgerBuilder";
import { burgerOrderSaga, fetchedOrdersSaga } from "./orders";
import * as actionsTypes from "../actions/actionsTypes";

export function* watchAuth() {
  yield all([
    takeEvery(actionsTypes.INITIAT_LOGOUT, logoutSaga),
    takeEvery(actionsTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(actionsTypes.AUTH_USER, authUserSaga),
    takeEvery(actionsTypes.CHECK_STATE, authCheckStateSaga),
  ]);
}

export function* watchBurgerBuilder() {
  yield takeEvery(actionsTypes.INIT_INGREDIENTS, initIngredientsSaga);
}

export function* watchOrders() {
  yield takeLatest(actionsTypes.BURGER_ORDER_SENT, burgerOrderSaga);
  yield takeEvery(actionsTypes.ORDERS_FETCH, fetchedOrdersSaga);
}
