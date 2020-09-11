import React from "react";
// import Keg from "./Keg.js";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, id: v4()});
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

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;