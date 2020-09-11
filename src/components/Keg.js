import React from "react";
import PropTypes from "prop-types";

function Keg(props){

  return (
    <React.Fragment>
      <div onClick = { () => props.whenKegClicked(props.id) }>
        <h3>{props.name}</h3>
        <h4>{props.brand}</h4>
        <p>{props.price}</p>
        <p>{props.alcoholContent}</p>
        <p>{props.pintsRemaining}</p>
      </div>
      <button onClick = { () => props.whenPintSold(props.id)}>Pint Sold!</button>
      <hr />
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