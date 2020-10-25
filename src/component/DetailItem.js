import React from 'react';
import styles from '../styles.module.css';
import Header from './Header';

function Header(props) {
  return(
    <Header title="Detail Item" />
    <ol><h4>Item: {props.name}</h4>
      <li>
        Price: {props.price}
      </li>
      <li>
        Color: {props.color}
      </li>
      <li>
        Quantity: {props.quantity}
      </li>
      <li>
        Describe: {props.describe}
      </li>
      {status}
    </ol>
  );
}
