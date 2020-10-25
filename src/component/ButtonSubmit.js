import React from 'react';
import styles from '../styles.module.css';

function ButtonSubmit(props) {
  return (
    <div className={styles.row}>
      <button type="submit"
        className={styles.button}>
        Submit
      </button>
    </div>
  );
}

export default ButtonSubmit;
