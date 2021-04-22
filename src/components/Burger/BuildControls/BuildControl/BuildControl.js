import React from 'react';
import classes from './BuildControl.module.scss';

export const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl} >
      <h3>{props.label}</h3>
      <button 
        className={classes.Less}
        onClick={props.remove}
        disabled={props.disabled}>
          Less
      </button>
      <button 
        className={classes.more}
        onClick={props.add}>
          More
      </button>
    </div>
  )
}