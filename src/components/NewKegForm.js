import React from "react";
import Keg from "./Keg.js";
import { v4 } from 'uuid';

function NewKegForm(){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.price.value);
    console.log(event.target.alcoholContent.value);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input 
        type = 'text'
        name = 'name'
        placeholder = 'Name of Beer'
        />
        <input 
        type = 'text'
        brand = 'brand'
        placeholder = 'Brand'
        />
        <input 
        type = 'text'
        price = 'price'
        placeholder = 'Price per Pint'
        />
        <input 
        type = 'text'
        alcoholContent = 'alcoholContent'
        placeholder = 'ABV%'
        />
        {/* <input 
        type = 'number'
        name = 'pintsRemaining'
        placeHolder = '124'
        /> */}
        <button type='submit'>Add!</button>
      </form>
    </React.Fragment>
  );
}

export default NewKegForm;