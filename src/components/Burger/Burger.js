import React from 'react';

import { BurgerIngridient } from './BurgerIngridient/BurgerIngridient';
import classes from './Burger.module.scss'

export const Burger = (props) => {

  let transformIngredients = Object.keys(props.ingredients)
    .map(
      igKey => {
        return [...Array(props.ingredients[igKey])]
          .map(
            (_, i) => <BurgerIngridient key={igKey + i} type={igKey} />)
      })
    .reduce((arr, ingr) => { return arr.concat(ingr) }, []);

  if (transformIngredients.length === 0) {
    transformIngredients = <p className={classes.AddingIngr}>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngridient type="bread-top"></BurgerIngridient>
      {transformIngredients}
      <BurgerIngridient type="bread-bottom"></BurgerIngridient>
    </div>
  );
}