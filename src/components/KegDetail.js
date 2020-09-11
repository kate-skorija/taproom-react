import React from "react";
// import Keg from "./Keg";
import PropTypes from "prop-types";

function KegDetail(props){

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h2>{props.keg.name} - {props.keg.brand}</h2>
      <p>Price: {props.keg.price} per pint</p>
      <p>Alcohol Content: {props.keg.alcoholContent}</p>
      <p>Pints Remaining: {props.keg.pintsRemaining}</p>
      <button onClick = {props.onClickingEdit}>Update Keg</button>
      <button onClick = { () => props.onClickingDelete(props.keg.id)}>Remove from Tap List</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onPintSold: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};
export default KegDetail;
