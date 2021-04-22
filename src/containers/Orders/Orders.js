import React, { Component } from "react";
import { connect } from "react-redux";

import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/order";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
  // state = {
  //   orders: [],
  //   loading: true,
  // };
  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
    //   axios
    //     .get("/orders.json")
    //     .then((res) => {
    //       // console.log(res.data);
    //       const fetchedOrders = [];
    //       for (let key in res.data) {
    //         fetchedOrders.push({
    //           ...res.data[key],
    //           id: key,
    //         });
    //       }
    //       this.setState({ loading: false, orders: fetchedOrders });
    //     })
    //     .catch((er) => {
    //       this.setState({ loading: false });
    //     });
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = (
        <div style={{ marginTop: "100px" }}>
          {this.props.orders.map((order) => (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={+order.price}
            />
          ))}
        </div>
      );
    }

    return orders;
  }
}

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
    onFetchOrders: (token, userId) => dispatch(actions.fetchedOrders(token, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));