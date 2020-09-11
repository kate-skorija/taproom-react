import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegDetail(props){

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h2>{props.keg.name} - {props.keg.brand}</h2>
      <p>Price: {props.keg.price} per pint</p>
      <p>Alcohol Content: {props.keg.alcoholContent}</p>
      {/* <p>Pints Remaining: {props.pintsRemaining}</p> */}
      {/* <button onClick={ props.onPintSold }>Pint Sold</button> */}
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onPintSold: PropTypes.func,
  // pintsRemaining: PropTypes.number
};
export default KegDetail;




  

