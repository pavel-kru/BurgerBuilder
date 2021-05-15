import React, { lazy, Suspense } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Logout from "./containers/Auth/Logout/Logout";
import * as actions from "./store/actions/auth";
import Spinner from "./components/UI/Spinner/Spinner";

const Checkout = lazy(() => import("./containers/Checkout/Checkout"));
const Orders = lazy(() => import("./containers/Orders/Orders"));
const Auth = lazy(() => import("./containers/Auth/Auth"));

const App = (props) => {
  const { onTryAutoSignup } = props;
  React.useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <Switch>
      <Route path="/auth" render={props => <Auth {...props} />} />
      <Route path="/" component={BurgerBuilder} />
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuthanticated) {
    routes = (
      <Switch>
        <Route path="/auth" render={props => <Auth {...props} />} />
        <Route path="/orders" render={props => <Orders {...props} />} />
        <Route path="/checkout" render={props => <Checkout {...props} />} />
        <Route path="/logout" component={Logout} />
        <Route path="/" component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Layout>
      <Suspense fallback={<Spinner />}>{routes}</Suspense>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthanticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
