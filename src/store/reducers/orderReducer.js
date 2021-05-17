import * as actionsTypes from "../actions/actionsTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  orders: [],
  loading: false,
  orderConfirmed: false,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.BURGER_ORDER_START:
      return updateObject(state, { loading: true });

    case actionsTypes.BURGER_ORDER_INIT:
      return updateObject(state, { orderConfirmed: false });

    case actionsTypes.BURGER_ORDER_SUCCESS:
      const newOrder = updateObject(action.orderData, { id: action.orderId });
      return updateObject(state, {
        loading: false,
        orders: state.orders.concat(newOrder),
        error: false,
        orderConfirmed: true,
      });

      case actionsTypes.BURGER_ORDER_FAIL:
        return updateObject(state, { loading: false });

    case actionsTypes.ORDERS_FETCH_START:
      return updateObject(state, { loading: true });

        case actionsTypes.ORDERS_FETCH_SUCCESS:
      return updateObject(state, {
        orders: action.orders,
        loading: false,
      });

    case actionsTypes.ORDERS_FETCH_FAIL:
      return updateObject(state, { loading: false });

    default:
      return state;
  }
};

export default orderReducer;
