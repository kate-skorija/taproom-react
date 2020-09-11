
import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";



function KegList(props) { 
  return (
    <React.Fragment>
      {props.kegList.map((keg, index) => 
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pintsRemaining={keg.pintsRemaining}
          key={index} />
      )} 
    </React.Fragment>
  );
}

// Add propTypes for ticketList.
// KegList.propTypes = {
//   kegList: PropTypes.array
// };

export default KegList;