import React from "react";
import { v4 } from 'uuid';

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.price.value);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input 
        type = 'text'
        name = 'name'
        placeHolder = 'Name of Beer'
        />
        <input 
        type = 'text'
        brand = 'brand'
        placeHolder = 'Brand'
        />
        <input 
        type = 'text'
        price = 'price'
        placeHolder = 'Price per Pint'
        />
        <input 
        type = 'text'
        alcoholContent = 'alcoholContent'
        placeHolder = 'ABV%'
        />
        {/* <input 
        type = 'number'
        name = 'pintsRemaining'
        placeHolder = '124'
        /> */}
      </form>
    </React.Fragment>
  );
}

export default NewKegForm