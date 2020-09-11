
import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";



function KegList(props) { 
  return (
    <React.Fragment>
      <hr/>
      {props.kegList.map((keg) => 
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pintsRemaining={keg.pintsRemaining}
          id={keg.id}
          key={keg.id} />
      )} 
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;