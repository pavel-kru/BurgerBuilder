import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ContactData from "./ContactData/ContactData";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  // state = {
  //   ingredients: 1,
  //   price: 0,
  // };
  // componentDidMount() {
  //   const query = new URLSearchParams(this.props.location.search);
  //   const ingredients = {};
  //   let price = 0;
  //   for (let param of query.entries()) {
  //     //['salad, '1']
  //     if (param[0] === "price") {
  //       price = param[1];
  //     } else {
  //       ingredients[param[0]] = +param[1];
  //     }
  //     this.setState({ ingredients: ingredients, price: price });
  //   }
  // }
  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ingr) {
      const orderRedirect = this.props.confirmed ? <Redirect to="/" /> : null;
      summary = (
        <>
          {orderRedirect}
          <CheckoutSummary
            ingredients={this.props.ingr}
            checkoutContinued={this.checkoutContinuedHandler}
            checkoutCanceled={this.checkoutCanceledHandler}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </>
      );
    }
    return summary;
  }
}

const mapStateToProps = (state) => {
  return {
    ingr: state.burgerBuilder.ingredients,
    confirmed: state.order.orderConfirmed,
  };
};

export default connect(mapStateToProps)(Checkout);
