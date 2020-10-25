import React from 'react';
import styles from '../styles.module.css';

function Header(props) {
  return (
    <h1 className={styles.bigblue}>{props.title}</h1>
  );
}

export default Header;
