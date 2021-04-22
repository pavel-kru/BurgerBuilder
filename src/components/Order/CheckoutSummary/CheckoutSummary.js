import React from "react";

import { Burger } from "../../Burger/Burger";
import { Button } from "../../UI/Button/Button";
import styles from "./CheckoutSummary.module.scss";

const CheckoutSummary = (props) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope it tastes perfect!</h1>
      <Burger ingredients={props.ingredients} />
      <Button btnType="Danger" clicked={props.checkoutCanceled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        Continue
      </Button>
    </div>
  );
};

export default CheckoutSummary;
