import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

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

const BurgerBuilder = (props) => {
  const [purchasing, setPurchasing] = React.useState(false);

  const dispatch = useDispatch();

  const onIngredientsAdded = (ingName) =>
    dispatch(actions.addIngredient(ingName));
  const onIngredientsRemoved = (ingName) =>
    dispatch(actions.removeIngredient(ingName));
  const onInitIngredients = useCallback(() => {
    dispatch(actions.initIngredients());
  }, [dispatch]);
  const onOrderInit = () => dispatch(orderActions.burgerOrderInit());

  const ingr = useSelector((state) => {
    return state.burgerBuilder.ingredients;
  });
  const price = useSelector((state) => {
    return state.burgerBuilder.price;
  });

  const error = useSelector((state) => {
    return state.burgerBuilder.error;
  });

  const isAuthanticated = useSelector((state) => {
    return state.auth.token !== null;
  });

  React.useEffect(() => {
    onInitIngredients();
  }, [onInitIngredients]);

  const updatePurchasable = (ingredients) => {
    let sum = Object.keys(ingredients)
      .map((ingr) => ingredients[ingr])
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  const purchaseHandler = () => {
    isAuthanticated ? setPurchasing(true) : props.history.push("/auth");
  };

  const purchaseContinueHandler = () => {
    props.history.push("/checkout");
    onOrderInit();
  };

  const purchaseCloseHandler = () => {
    setPurchasing(false);
  };

  const disabledInfo = {
    ...props.ingr,
  };

  for (let ingr in disabledInfo) {
    disabledInfo[ingr] = disabledInfo[ingr] <= 0;
  }
  let orderModal = null;

  let burger = error ? (
    <p style={{ color: "black", margin: "200px 0 0 50px" }}>
      ingredients can't be loaded
    </p>
  ) : (
    <Spinner />
  );
  if (ingr) {
    burger = (
      <Aux>
        <Burger ingredients={ingr} />
        <BuildControls
          ingredientsAdd={onIngredientsAdded}
          ingredientsRemove={onIngredientsRemoved}
          disabled={disabledInfo}
          purchasable={updatePurchasable(ingr)}
          price={price}
          ordered={purchaseHandler}
          isAuthanticated={isAuthanticated}
        />
      </Aux>
    );
    orderModal = (
      <BurgerSummary
        ingredients={ingr}
        continuePurchasing={purchaseContinueHandler}
        CancelPurchasing={purchaseCloseHandler}
        price={price}
      />
    );
  }

  return (
    <Aux>
      <Modal show={purchasing} close={purchaseCloseHandler}>
        {orderModal}
      </Modal>
      {burger}
    </Aux>
  );
};

export default withErrorHandler(BurgerBuilder, axios);
