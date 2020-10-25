import React from 'react';
import styles from '../styles.module.css';

function NumberInput(props) {
  return (
    <div className={styles.row}>
      <div className={styles.col25}>
        <label>{props.label}</label>
      </div>
      <div className={styles.col75}>
        <input
          type='number'
          step={props.step}
          placeholder={props.placeholder}
          onChange={(e) => {props.setNumber(e.target.value)}}
          name={props.name}
          value={props.value}
        />
      </div>
    </div>
  );
}

export default NumberInput;
