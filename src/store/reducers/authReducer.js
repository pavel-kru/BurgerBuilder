import * as actionsTypes from "../actions/actionsTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  userId: null,
  token: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.AUTH_START:
      return updateObject(state, { loading: true, error: null });
    case actionsTypes.AUTH_SUCCESS:
      return updateObject(state, {
        userId: action.userId,
        token: action.idToken,
        error: false,
        loading: false,
      });
    case actionsTypes.AUTH_FAIL:
      return updateObject(state, { error: action.error, loading: false });
    case actionsTypes.AUTH_LOGOUT:
      return updateObject(state, {
        userId: null,
        token: null,
      });
    default:
      return state;
  }
};

export default reducer;
