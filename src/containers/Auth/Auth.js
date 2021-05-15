import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Input from "../../components/UI/Input/Input";
import { Button } from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./Auth.module.scss";
import * as actions from "../../store/actions/auth";
import {checkValidity} from '../../shared/utility'

const Auth = (props) => {
  const [authForm, setAuthForm] = useState({
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
  });

  const [isSignUp, setIsSignUp] = useState(true);

    const changeFormValueHandler = (event, contorolName) => {
    const updatedAuthForm = {
      ...authForm,
      [contorolName]: {
        ...authForm[contorolName],
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          authForm[contorolName].validation
        ),
        touched: true,
      },
    };
    setAuthForm(updatedAuthForm);
  };

  const formOnSubmit = (event) => {
    event.preventDefault();
    props.onAuth(authForm.email.value, authForm.password.value, isSignUp);
  };

  const signinSignupHandler = (event) => {
    event.preventDefault();
    setIsSignUp(!isSignUp)
  };

  const formElements = [];
  for (let key in authForm) {
    formElements.push({
      id: key,
      config: authForm[key],
    });
  }
  let form = <Spinner />;
  if (!props.loading) {
    form = formElements.map((el) => (
      <Input
        key={el.id}
        elementConfig={el.config.elementConfig}
        elementType={el.config.elementType}
        value={el.config.value}
        changed={(event) => changeFormValueHandler(event, el.id)}
        invalid={el.config.validation && !el.config.valid && el.config.touched}
      />
    ));
  }
  let errorMessage = props.error ? (
    <p style={{ color: "red" }}>
      {props.error.message.split("_").join(" ") + "!"}
    </p>
  ) : null;

  let redirect = null;
  if (props.isAuth && props.ingr) {
    let ingredientsTouched = Object.values(props.ingr).reduce((sum, el) => {
      return sum + el;
    }, 0);
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
      <form onSubmit={formOnSubmit} className={classes.LoginData}>
        <p>Please, login.</p>
        {errorMessage}
        {form}
        <Button btnType="Success">SUBMIT</Button>
        <Button clicked={signinSignupHandler} btnType="Danger">
          SWITCH TO {!isSignUp ? "SIGNIN" : "SIGNUP"}
        </Button>
      </form>
    </>
  );
};

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
