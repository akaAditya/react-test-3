import React from "react";
import { useState } from "react";

const ChocolateEntriesForm = (props) => {
  const [chocoName, setChocoName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState('');

  const chocoNameHandler = (event) => {
    setChocoName(event.target.value);
  };

  const chocoDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const chocoPriceHandler = (event) => {
    setPrice(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const ChocolateData = {
      title: chocoName,
      description: description,
      price: price,
    };
    props.onSaveChocolateData(ChocolateData);
    setChocoName("");
    setDescription("");
    setPrice("");
  };
  const fetchDataToAPI = ()=>{
    fetch('https://crudcrud.com/api/ec62b7c2408542199d3f7c4ebea41faf/inventory',{
      method : 'POST',
      body: JSON.stringify({
        title : chocoName,
        description: description,
        price: price,
      }),
      headers : {
        'Content-Type' : 'application/json'
      }
    })
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Chocolates Name</label>
        <input type="text" value={chocoName} onChange={chocoNameHandler} />
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={chocoDescriptionHandler}
        />
        <label>Price</label>
        <input type="text" value={price} onChange={chocoPriceHandler} />
        <button onClick={fetchDataToAPI}>Add Item</button>
      </form>
    </div>
  );
};

export default ChocolateEntriesForm;
