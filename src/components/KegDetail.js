import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

class KegDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKegPintsRemaining: 124
    };
  }

  handlePintSold = () => {
    const selectedKegPintsRemaining = this.state.selectedKegPintsRemaining;
    console.log("pintSold reached!");
    if (selectedKegPintsRemaining > 0 ){
      this.setState({selectedKegPintsRemaining: selectedKegPintsRemaining - 1})
    }
  }

  render(props) {
    return (
      <React.Fragment>
        <Keg 
        name={props.keg.name}
        brand={props.keg.brand}
        price={props.keg.price}
        alcoholContent={props.keg.alcoholContent}
        id={props.keg.id}
        key={props.keg.id}/>
        <button onClick={ this.handlePintSold }>Pint Sold</button>
        <hr/>
    </React.Fragment>
    )
  }
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onPintSold: PropTypes.func,
};

export default KegDetail;




  // function KegDetail(props){

  //   return (
  //     <React.Fragment>
  //       <h1>Keg Details</h1>
  //       <h2>{props.keg.name} - {props.keg.brand}</h2>
  //       <p>Price: {props.keg.price} per pint</p>
  //       <p>Alcohol Content: {props.keg.alcoholContent}</p>
  //       <p>Pints Remaining: {props.pintsRemaining}</p>
  //       <button onClick={ props.onPintSold }>Pint Sold</button>
  //       <hr/>
  //     </React.Fragment>
  //   );
  // }
  
  // KegDetail.propTypes = {
  //   keg: PropTypes.object,
  //   onPintSold: PropTypes.func,
  //   pintsRemaining: PropTypes.number
  // };