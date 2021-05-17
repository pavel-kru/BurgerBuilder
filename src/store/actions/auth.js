import * as actionsTypes from "./actionsTypes";

export const authStart = () => {
  return {
    type: actionsTypes.AUTH_START,
  };
};

export const authSuccess = (userId, token) => {
  return {
    type: actionsTypes.AUTH_SUCCESS,
    userId: userId,
    idToken: token,
  };
};

export const authFail = (error) => {
  return {
    type: actionsTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  // localStorage.removeItem("token");
  // localStorage.removeItem("expirationDate");
  // localStorage.removeItem("userId");
  return {
    type: actionsTypes.INITIAT_LOGOUT,
  };
};

export const logoutSucceed = () => {
  return { type: actionsTypes.AUTH_LOGOUT };
};

export const checkAuthTimeout = (expirationTime) => {
  return {
    type: actionsTypes.AUTH_CHECK_TIMEOUT,
    expirationTime: expirationTime,
  };
};

export const auth = (email, password, isSignUp) => {
  return {
    type: actionsTypes.AUTH_USER,
    email: email,
    password: password,
    isSignUp: isSignUp,
  };
};

export const authCheckState = () => {
  return {
    type: actionsTypes.CHECK_STATE
  }
};
