import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.css';
import FormNewItem from "./component/FormNewItem";

export default function App() {
  return (
    <div className={styles.container}>
      <FormNewItem />
    </div>
  );
}
