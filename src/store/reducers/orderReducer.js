import * as actionsTypes from "../actions/actionsTypes";
import { updateState } from "../../shared/utility";

const initialState = {
  orders: [],
  loading: false,
  orderConfirmed: false,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.BURGER_ORDER_START:
      return updateState(state, { loading: true });

    case actionsTypes.BURGER_ORDER_INIT:
      return updateState(state, { orderConfirmed: false });

    case actionsTypes.BURGER_ORDER_SUCCESS:
      const newOrder = updateState(action.orderData, { id: action.orderId });
      return updateState(state, {
        loading: false,
        orders: state.orders.concat(newOrder),
        error: false,
        orderConfirmed: true,
      });

    case actionsTypes.BURGER_ORDER_FAIL:
      return updateState(state, { loading: false });

    case actionsTypes.ORDERS_FETCH_SUCCESS:
      return updateState(state, {
        orders: action.orders,
        loading: false,
      });

    case actionsTypes.ORDERS_FETCH_FAIL:
      return updateState(state, { loading: false });

    case actionsTypes.ORDERS_FETCH_START:
      return updateState(state, { loading: true });

    default:
      return state;
  }
};

export default orderReducer;
