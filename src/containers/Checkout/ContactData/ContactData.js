import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import styles from "./ContactData.module.scss";
import { Button } from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import * as actions from "../../../store/actions/order";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import { updateState, checkValidity } from "../../../shared/utility";

class ContactData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderForm: {
        name: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Your Name",
          },
          value: "",
          validation: { required: true },
          valid: false,
          touched: false,
        },
        phone: {
          elementType: "input",
          elementConfig: {
            type: "tel",
            placeholder: "Your Phone Number",
          },
          value: "",
          validation: { required: true, isTel: true },
          valid: false,
          touched: false,
        },
        email: {
          elementType: "input",
          elementConfig: {
            type: "email",
            placeholder: "Your E-mail",
          },
          value: "",
          validation: { required: true, isMail: true },
          valid: false,
          touched: false,
        },
        street: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Your Street",
          },
          value: "",
          validation: { required: true },
          valid: false,
          touched: false,
        },
        house: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Your House",
          },
          value: "",
          validation: { required: true },
          valid: false,
          touched: false,
        },
        deliveryMethod: {
          elementType: "select",
          elementConfig: {
            options: [
              { value: "fastest", displayName: "Fastest" },
              { value: "cheapest", displayName: "Cheapest" },
            ],
          },
          value: "fastest",
          valid: true,
          validation: {},
        },
      },
      formIsValid: false,
    };
  }

  changeFormValueHandler(event, idx) {
    const updatedFormElement = updateState(this.state.orderForm[idx], {
      value: event.target.value,
      touched: true,
      valid: checkValidity(
        event.target.value,
        this.state.orderForm[idx].validation
      ),
    });
    const updatedOrderForm = updateState(this.state.orderForm, {
      [idx]: updatedFormElement,
    });
    let formIsValid = true;

    for (let inputIdx in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdx].valid && formIsValid;
    }

    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  }

  orderHandler = (event) => {
    event.preventDefault();

    const formData = {};
    for (let inputIdx in this.state.orderForm) {
      formData[inputIdx] = this.state.orderForm[inputIdx].value;
    }
    const order = {
      ingredients: this.props.ingr,
      price: this.props.price,
      orderData: formData,
      userId: this.props.userId,
    };

    this.props.onOrderBurger(order, this.props.token);
  };

  render() {
    const formElements = [];
    for (let key in this.state.orderForm) {
      formElements.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form className={styles.ContactData} onSubmit={this.orderHandler}>
        <h4>Enter your contact data, please.</h4>
        {formElements.map((el) => (
          <Input
            key={el.id}
            elementConfig={el.config.elementConfig}
            elementType={el.config.elementType}
            value={el.config.value}
            changed={(event) => this.changeFormValueHandler(event, el.id)}
            invalid={
              el.config.validation && !el.config.valid && el.config.touched
            }
          />
        ))}
        <Button
          btnType="Success"
          disabled={!this.state.formIsValid}
          // clicked={this.props.onOrderConfirm}
        >
          CONFIRM
        </Button>
      </form>
    );

    if (this.props.loading) {
      form = <Spinner />;
    }
    const orderRedirect = this.props.confirmed ? <Redirect to="/" /> : null;

    return (
      <>
        {orderRedirect}
        {form}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingr: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.price,
    loading: state.order.loading,
    confirmed: state.order.orderConfirmed,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData, token) =>
      dispatch(actions.burgerOrder(orderData, token)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));
