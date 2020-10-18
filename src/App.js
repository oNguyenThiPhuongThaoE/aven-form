import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        name: '',
        price: 0.0,
        quantity: 0,
        color: 'red',
        describe: '',
        status: false
      },
      data: {}
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.name === "status"? event.target.checked : event.target.value;
    this.setState({item: {...this.state.item, [nam]: val}})
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    // debugger
    // this.setState({data: this.state.item})
    if (this.state.item.name){
      alert("You submitted " + this.state.item.name);
    }else{
      alert("Have error submit!");
    }

  }

  render() {
    let status = '';
    if (this.state.item.status){
      status = <li>Stocking</li>;
    }else{
      status = <li>Out of stock</li>;
    }
    return (
      <div className={styles.container}>
        <h1 className={styles.bigblue}>Demo Sapple App</h1>
        <form onSubmit={this.mySubmitHandler} >
          <div className={styles.row}>
            <div className={styles.col25}>
              <label>Enter item name:</label>
            </div>
            <div className={styles.col75}>
              <input
                type='text'
                onChange={this.myChangeHandler}
                placeholder="Enter name.."
                name="name"
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col25}>
              <label>Enter item price:</label>
            </div>
            <div className={styles.col75}>
              <input
                type='text'
                onChange={this.myChangeHandler}
                placeholder="Enter Price.."
                name="price"
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col25}>
              <label>Enter item quantity: </label>
            </div>
            <div className={styles.col75}>
              <input
                type='number' min='1' max='100'
                onChange={this.myChangeHandler}
                placeholder="1"
                name="quantity"
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col25}>
              <label>Enter item color: </label>
            </div>
            <div className={styles.col75}>
              <select onChange={this.myChangeHandler} name="color">
                <option value='red'>red</option>
                <option value='blue'>blue</option>
                <option value='black'>black</option>
                <option value='pink'>pink</option>
              </select>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col25}>
              <label>Enter item describe: </label>
            </div>
            <div className={styles.col75}>
              <textarea rows="3" onChange={this.myChangeHandler} placeholder="Write something.." name="describe" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col25}>
              <label>Enter item status: </label>
            </div>
            <div className={styles.col75}>
              <input
                type='checkbox'
                onChange={this.myChangeHandler}
                name="status"
                checked={this.state.item.status}
              />
            </div>
          </div>
          <div className={styles.row}>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </div>
        </form>
        <hr></hr>
        <ol><h4>Item: {this.state.item.name}</h4>
          <li>
            Price: {this.state.item.price}
          </li>
          <li>
            Color: {this.state.item.color}
          </li>
          <li>
            Quantity: {this.state.item.quantity}
          </li>
          <li>
            Describe: {this.state.item.describe}
          </li>
          {status}
        </ol>
      </div>
    );
  }
}

export default Form;
