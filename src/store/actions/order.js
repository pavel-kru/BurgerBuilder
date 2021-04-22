import axios from "../../axios-orders";
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
  return (dispatch) => {
    dispatch(burgerOrderStart());
    axios
      .post("/orders.json?auth=" + token, orderData)
      .then((response) => {
        console.log(response.data);
        dispatch(burgerOrderSuccess(response.data.name, orderData));
      })
      .catch((error) => dispatch(burgerOrderFail(error)));
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
  return (dispatch) => {
    dispatch(ordersFetchStart());
    const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios.get( '/orders.json' + queryParams)
      .then((response) => {
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({
            ...response.data[key],
            id: key,
          });
        }
        dispatch(OrdersFetchedSuccess(fetchedOrders));
      })
      .catch((error) => dispatch(OrdersFetchedFail(error)));
  };
};
