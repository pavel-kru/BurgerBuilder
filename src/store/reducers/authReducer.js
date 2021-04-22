import * as actionsTypes from "../actions/actionsTypes";
import { updateState } from "../../shared/utility";

const initialState = {
  userId: null,
  token: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.AUTH_START:
      return updateState(state, { loading: true, error: null });
    case actionsTypes.AUTH_SUCCESS:
      return updateState(state, {
        userId: action.userId,
        token: action.idToken,
        error: false,
        loading: false,
      });
    case actionsTypes.AUTH_FAIL:
      return updateState(state, { error: action.error, loading: false });
    case actionsTypes.AUTH_LOGOUT:
      return updateState(state, {
        userId: null,
        token: null,
      });
    default:
      return state;
  }
};

export default reducer;
