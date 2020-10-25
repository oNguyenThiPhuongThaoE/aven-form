import React, {useState} from 'react';
import styles from '../styles.module.css';
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import SelectInput from "./SelectInput";
import TextArea from "./TextArea";
import CheckBox from "./CheckBox";
import ButtonSubmit from "./ButtonSubmit";
import Header from "./Header";

function FormNewItem() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState(0);
  const [color, setColor] = useState("");
  const [describer, setDescriber] = useState("Write something ...");
  const [status, setStatus] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const mySubmitHandler = (event) => {
    event.preventDefault();
    setIsSubmit(true);
    if (setIsSubmit){
      alert("You submitted " + name);
    }else{
      alert("Have error submit!");
    }

  }

  return (
    <form onSubmit={mySubmitHandler}>
      <Header title="New Item"
      />
      <TextInput
        label="Enter item name:"
        name="name"
        value={name}
        setName={setName}
        placeholder="Enter name..."
      />
      <NumberInput
        label="Enter item price:"
        name="price"
        value={price}
        setNumber={setPrice}
        step="0.01"
        placeholder="0.00"
      />
      <NumberInput
        label="Enter item quantity:"
        name="quantity"
        value={quantity}
        setNumber={setQuantity}
        step="1"
        placeholder="0"
      />
      <SelectInput
        label="Enter item color:"
        name="color"
        value={color}
        setColor={setColor}
      />
      <TextArea
        label="Enter item describer:"
        name="describer"
        value={describer}
        setDescriber={setDescriber}
        rows="3"
        placeholder="Write something..."
      />
      <CheckBox
        type="checkbox"
        label="Enter item status:"
        name="status"
        value={status}
        setStatus={setStatus}
      />
      <ButtonSubmit/>
    </form>
  );
}

export default FormNewItem;
