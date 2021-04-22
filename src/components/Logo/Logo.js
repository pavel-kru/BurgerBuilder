import React from 'react';

import LogoImg from '../../assets/images/burger-logo.png';
import classes from './Logo.module.scss';

export const Logo = (props) => (
  <div  className={classes.Logo} style={{height: props.height}}>
    <img onClick={props.clicked} src={LogoImg} alt="Logo" />
  </div>
)