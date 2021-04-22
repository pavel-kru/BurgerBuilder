import React, { Component } from "react";
import { connect } from "react-redux";

import { Aux } from "../../hoc/Auxiliary/Auxiliary";
import { Burger } from "../../components/Burger/Burger";
import { BuildControls } from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import { BurgerSummary } from "../../components/Burger/BurgerSummary/BurgerSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/burgerBuilder";
import * as orderActions from "../../store/actions/order";

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }
  // }

  state = {
    purchasing: false,
    // loading: false,
    // error: false,
  };

  componentDidMount() {
    console.log(this.props);
    this.props.onInitIngredients();
    //   axios
    //     .get(
    //       "https://burger-builder-b8bbf-default-rtdb.firebaseio.com/ingredients.json"
    //     )
    //     .then((response) => {
    //       this.setState({ ingredients: response.data });
    //     })
    //     .catch(( ) => this.setState({ error: true }));
  }

  updatePurchasable = (ingredients) => {
    let sum = Object.keys(ingredients)
      .map((ingr) => ingredients[ingr])
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  // ingredientsAddHandler = (type) => {
  //   let newCount = this.props.ingr[type] + 1;
  //   const updateIngredients = {
  //     ...this.props.ingr,
  //   };
  //   updateIngredients[type] = newCount;
  //   let newPrice = this.props.price + INGREDIENTS_PRICE[type];
  //   this.setState({ ingredients: updateIngredients, price: newPrice });
  //   this.updatePurchasable(updateIngredients);
  // };

  // ingredientsRemoveHandler = (type) => {
  //   let newCount = this.props.ingr[type] - 1;
  //   if (newCount < 0) return;
  //   const updateIngredients = {
  //     ...this.props.ingr,
  //   };
  //   updateIngredients[type] = newCount;
  //   let newPrice = this.props.price - INGREDIENTS_PRICE[type];
  //   this.setState({ ingredients: updateIngredients, price: newPrice });
  //   this.updatePurchasable(updateIngredients);
  // };

  purchaseHandler = () => {
    this.props.isAuthanticated
      ? this.setState({ purchasing: true })
      : this.props.history.push("/auth");
    console.log(this.state.purchasing);
  };

  purchaseContinueHandler = () => {
    this.props.history.push("/checkout");
    this.props.onOrderInit();
    // alert("You continue!");
    // const queryParams = [];
    // for (let i in this.props.ingr) {
    //   queryParams.push(
    //     encodeURIComponent(i) + "=" + encodeURIComponent(this.props.ingr[i])
    //   );
    // }
    // queryParams.push("price=" + this.props.price);
    // const queryString = queryParams.join("&");
    // this.props.history.push({
    //   pathname: "/checkout",
    //   search: "?" + queryString,
    // });
  };

  purchaseCloseHandler = () => {
    this.setState({ purchasing: false });
  };

  render() {
    const disabledInfo = {
      ...this.props.ingr,
    };

    for (let ingr in disabledInfo) {
      disabledInfo[ingr] = disabledInfo[ingr] <= 0;
    }
    let orderModal = null;

    let burger = this.props.error ? (
      <p style={{ color: "black", margin: "200px 0 0 50px" }}>
        ingredients can't be loaded
      </p>
    ) : (
      <Spinner />
    );
    if (this.props.ingr) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingr} />
          <BuildControls
            ingredientsAdd={this.props.onIngredientsAdded}
            ingredientsRemove={this.props.onIngredientsRemoved}
            disabled={disabledInfo}
            purchasable={this.updatePurchasable(this.props.ingr)}
            price={this.props.price}
            ordered={this.purchaseHandler}
            isAuthanticated={this.props.isAuthanticated}
          />
        </Aux>
      );
      orderModal = (
        <BurgerSummary
          ingredients={this.props.ingr}
          continuePurchasing={this.purchaseContinueHandler}
          CancelPurchasing={this.purchaseCloseHandler}
          price={this.props.price}
        />
      );
    }

    // if (this.state.loading) {
    //   orderModal = <Spinner />;
    // }

    return (
      <Aux>
        <Modal show={this.state.purchasing} close={this.purchaseCloseHandler}>
          {orderModal}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingr: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.price,
    error: state.burgerBuilder.error,
    isAuthanticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientsAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientsRemoved: (ingName) =>
      dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onOrderInit: () => dispatch(orderActions.burgerOrderInit()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
