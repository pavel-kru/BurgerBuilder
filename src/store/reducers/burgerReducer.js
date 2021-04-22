import * as actionsTypes from "../actions/actionsTypes";

const initialState = {
  ingredients: null,
  price: 1,
  error: false,
};

const INGREDIENTS_PRICE = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.9,
};

const toggleIngredients = (state, action, operator) => {
  return {
    ...state,
    ingredients: {
      ...state.ingredients,
      [action.ingredientName]:
        operator === "+"
          ? state.ingredients[action.ingredientName] + 1
          : operator === "-"
          ? state.ingredients[action.ingredientName] - 1
          : null,
    },
    price:
      operator === "+"
        ? state.price + INGREDIENTS_PRICE[action.ingredientName]
        : operator === "-"
        ? state.price - INGREDIENTS_PRICE[action.ingredientName]
        : null,
  };
};

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_INGREDIENT:
      return toggleIngredients(state, action, "+");

    case actionsTypes.REMOVE_INGREDIENT:
      return toggleIngredients(state, action, "-");

    case actionsTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat,
        },
        price: initialState.price,
        error: false,
      };

    case actionsTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export default burgerReducer;
