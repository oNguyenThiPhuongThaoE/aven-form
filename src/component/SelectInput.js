import React from 'react';
import styles from '../styles.module.css';

function SelectInput(props) {

  return (
    <div className={styles.row}>
      <div className={styles.col25}>
        <label>{props.label}</label>
      </div>
      <div className={styles.col75}>
        <select onChange={(e)=>{props.setColor(e.target.value)}}
          name={props.name}
          value={props.value}>
          <option value='red'>red</option>
          <option value='blue'>blue</option>
          <option value='black'>black</option>
          <option value='pink'>pink</option>
        </select>
      </div>
    </div>
  );
}

export default SelectInput;
