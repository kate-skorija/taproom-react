import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h2>{keg.name} - {keg.brand}</h2>
      <p>Price: {keg.price} per pint</p>
      <p>Alcohol Content: {keg.alcoholContent}</p>
      <p>Pints Remaining: {keg.pintsRemaining}</p>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;