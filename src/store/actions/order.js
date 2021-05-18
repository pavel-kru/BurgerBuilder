import * as actionsTypes from "./actionsTypes";

export const burgerOrderInit = () => {
  return {
    type: actionsTypes.BURGER_ORDER_INIT,
  };
};

export const burgerOrderSuccess = (id, orderData) => {
  return {
    type: actionsTypes.BURGER_ORDER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const burgerOrderFail = (error) => {
  return {
    type: actionsTypes.BURGER_ORDER_FAIL,
    error: error,
  };
};

export const burgerOrderStart = () => {
  return {
    type: actionsTypes.BURGER_ORDER_START,
  };
};

export const burgerOrder = (orderData, token) => {
  return {
    type: actionsTypes.BURGER_ORDER_SENT,
    orderData: orderData,
    token: token,
  };
};

export const OrdersFetchedSuccess = (orders) => {
  return {
    type: actionsTypes.ORDERS_FETCH_SUCCESS,
    orders: orders,
  };
};
export const OrdersFetchedFail = (error) => {
  return {
    type: actionsTypes.ORDERS_FETCH_FAIL,
    error: error,
  };
};

export const ordersFetchStart = () => {
  return {
    type: actionsTypes.ORDERS_FETCH_START,
  };
};

export const fetchedOrders = (token, userId) => {
  return {
    type: actionsTypes.ORDERS_FETCH,
    token: token,
    userId: userId,
  };
};
