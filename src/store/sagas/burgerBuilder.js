import { put } from "redux-saga/effects";
import axios from "axios";

import {
  setIngredients,
  fetchIngredientsFailed,
} from "../actions/burgerBuilder";

export function* initIngredientsSaga(actions) {
  try {
    const response = yield axios.get(
      "https://burger-builder-b8bbf-default-rtdb.firebaseio.com/ingredients.json"
    );
    yield put(setIngredients(response.data));
  } catch (error) {
    yield put(fetchIngredientsFailed());
  }
}
