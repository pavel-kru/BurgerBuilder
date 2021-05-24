import React, { useEffect } from "react";
import { connect } from "react-redux";

import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/order";

const Orders = (props) => {
  const { onFetchOrders } = props;
  useEffect(() => {
    onFetchOrders(props.token, props.userId);
  }, [onFetchOrders, props.token, props.userId]);

  let orders = null;
  if (!props.loading) {
    orders = (
      <div style={{ marginTop: "100px" }}>
        {props.orders.length === 0 ? (
          <p style={{ textAlign: "center", fontSize: "1.7rem", marginTop: "50%" }}>
            You don't have any orders.
          </p>
        ) : (
          props.orders.map((order) => (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={+order.price}
            />
          ))
        )}
      </div>
    );
  }

  return orders;
};

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token, userId) =>
      dispatch(actions.fetchedOrders(token, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
