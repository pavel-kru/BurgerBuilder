import { put, delay, call } from "redux-saga/effects";
import {
  logoutSucceed,
  logout,
  authStart,
  authFail,
  authSuccess,
  checkAuthTimeout,
} from "../actions/auth";
import axios from "axios";

export function* logoutSaga() {
  yield call([localStorage, "removeItem"], "token");
  yield call([localStorage, "removeItem"], "expirationDate");
  yield call([localStorage, "removeItem"], "userId");
  yield put(logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(logout());
}

export function* authUserSaga(action) {
  yield put(authStart());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true,
  };
  let url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBlGFZ3Hke0OHMJgdrlfYabcIExiHCtxxQ";
  if (action.isSignUp) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBlGFZ3Hke0OHMJgdrlfYabcIExiHCtxxQ";
  }
  try {
    const response = yield axios.post(url, authData);
    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );
    yield localStorage.setItem("token", response.data.idToken);
    yield localStorage.setItem("expirationDate", expirationDate);
    yield localStorage.setItem("userId", response.data.localId);
    yield put(authSuccess(response.data.localId, response.data.idToken));
    yield put(checkAuthTimeout(response.data.expiresIn));
  } catch (error) {
    yield put(authFail(error.response.data.error));
  }
}

export function* authCheckStateSaga(action) {
  const token = localStorage.getItem("token");
  if (!token) {
    yield put(logout());
  } else {
    const expirationDate = yield new Date(
      localStorage.getItem("expirationDate")
    );
    if (expirationDate <= new Date()) {
      yield put(logout());
    } else {
      const userId = localStorage.getItem("userId");
      yield put(authSuccess(userId, token));
      yield put(
        checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
}
