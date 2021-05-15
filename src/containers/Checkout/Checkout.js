import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ContactData from "./ContactData/ContactData";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

const Checkout = (props) => {
  const checkoutCanceledHandler = () => {
    props.history.goBack();
  };
  const checkoutContinuedHandler = () => {
    props.history.replace("/checkout/contact-data");
  };

  let summary = <Redirect to="/" />;
  if (props.ingr) {
    const orderRedirect = props.confirmed ? <Redirect to="/" /> : null;
    summary = (
      <>
        {orderRedirect}
        <CheckoutSummary
          ingredients={props.ingr}
          checkoutContinued={checkoutContinuedHandler}
          checkoutCanceled={checkoutCanceledHandler}
        />
        <Route
          path={props.match.path + "/contact-data"}
          component={ContactData}
        />
      </>
    );
  }
  return summary;
};

const mapStateToProps = (state) => {
  return {
    ingr: state.burgerBuilder.ingredients,
    confirmed: state.order.orderConfirmed,
  };
};

export default connect(mapStateToProps)(Checkout);
