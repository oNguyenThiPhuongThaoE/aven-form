import React from 'react';
import styles from '../styles.module.css';

function CheckBox(props) {
  return (
    <div className={styles.row}>
      <div className={styles.col25}>
        <label>{props.label}</label>
      </div>
      <div className={styles.col75}>
        <input
          type={props.type}
          onChange={(e)=>{props.setStatus(e.target.value)}}
          name={props.name}
          checked={props.value}
        />
      </div>
    </div>
  );
}

export default CheckBox;
