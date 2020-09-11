import React from "react";
import PropTypes from "prop-types";

function Keg(props){

  function handlePintsEdit(event) {
    if (event.target.pintsRemaining.value > 0) {
      props.whenPintSold({pintsRemaining: (event.target.pintsRemaining.value - 1), id: event.target.id.value});
    }
  }

  return (
    <React.Fragment>
      <div onClick = { () => props.whenKegClicked(props.id) }>
        <h3>{props.name}</h3>
        <h4>{props.brand}</h4>
        <p>{props.price}</p>
        <p>{props.alcoholContent}</p>
        <p>{props.pintsRemaining}</p>
        <hr />
      </div>
      <button onClick = { () => handlePintsEdit}>Pint Sold!</button>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  pintsRemaining: PropTypes.number,
  whenKegClicked: PropTypes.func,
  whenPintSold: PropTypes.func
};

export default Keg;

// potentially move pint sold button to keg control? and have a method there that reduces number of pints? might make more sense