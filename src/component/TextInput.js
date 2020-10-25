import React from 'react';
import styles from '../styles.module.css';

function TextInput(props) {
  return (
    <div className={styles.row}>
      <div className={styles.col25}>
        <label>{props.label}</label>
      </div>
      <div className={styles.col75}>
        <input
          type='text'
          placeholder={props.placeholder}
          onChange={(e) => {props.setName(e.target.value)}}
          name={props.name}
          value={props.value}
        />
      </div>
    </div>
  );
}

export default TextInput;
