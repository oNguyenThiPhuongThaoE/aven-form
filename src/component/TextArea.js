import React from 'react';
import styles from '../styles.module.css';

function TextArea(props) {
  return (
    <div className={styles.row}>
      <div className={styles.col25}>
        <label>{props.label}</label>
      </div>
      <div className={styles.col75}>
        <textarea
          rows={props.rows}
          onChange={(e)=>{props.setDescriber(e.target.value)}}
          placeholder={props.placeholder}
          name={props.name}
          value={props.value} />
      </div>
    </div>
  );
}

export default TextArea;
