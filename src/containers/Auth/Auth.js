import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Input from "../../components/UI/Input/Input";
import { Button } from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./Auth.module.scss";
import * as actions from "../../store/actions/auth";
import { updateState, checkValidity } from "../../shared/utility";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authForm: {
        email: {
          elementType: "input",
          elementConfig: {
            type: "email",
            placeholder: "E-mail",
          },
          value: "",
          validation: { required: true, isMail: true },
          valid: false,
          touched: false,
        },
        password: {
          elementType: "input",
          elementConfig: {
            type: "password",
            placeholder: "Password",
          },
          value: "",
          validation: { required: true, minLength: 6 },
          valid: false,
          touched: false,
        },
      },
      isSignUp: true,
    }
  }
 
  changeFormValueHandler = (event, contorolName) => {
    const updatedAuthForm = updateState(this.state.authForm, {
      [contorolName]: updateState(this.state.authForm[contorolName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.authForm[contorolName].validation
        ),
        touched: true,
      }),
    });

    this.setState({ authForm: updatedAuthForm });
  };

  formOnSubmit = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.authForm.email.value,
      this.state.authForm.password.value,
      this.state.isSignUp
    );
  };

  signinSignupHandler = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return { isSignUp: !prevState.isSignUp };
    });
  };

  render() {
    const formElements = [];
    for (let key in this.state.authForm) {
      formElements.push({
        id: key,
        config: this.state.authForm[key],
      });
    }
    let form = <Spinner />;
    if (!this.props.loading) {
      form = formElements.map((el) => (
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
      ));
    }
    let errorMessage = this.props.error ? (
      <p style={{ color: "red" }}>
        {this.props.error.message.split("_").join(" ") + "!"}
      </p>
    ) : null;

    let redirect = null;
    if (this.props.isAuth && this.props.ingr) {
      let ingredientsTouched = Object.values(this.props.ingr).reduce(
        (sum, el) => {
          return sum + el;
        },
        0
      );
      redirect =
        ingredientsTouched > 0 ? (
          <Redirect to="/checkout" />
        ) : (
          <Redirect to="/" />
        );
    }
    return (
      <>
        {redirect}
        <form onSubmit={this.formOnSubmit} className={classes.LoginData}>
          <p>Please, login.</p>
          {errorMessage}
          {form}
          <Button btnType="Success">SUBMIT</Button>
          <Button clicked={this.signinSignupHandler} btnType="Danger">
            SWITCH TO {!this.state.isSignUp ? "SIGNIN" : "SIGNUP"}
          </Button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    ingr: state.burgerBuilder.ingredients,
    isAuth: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
