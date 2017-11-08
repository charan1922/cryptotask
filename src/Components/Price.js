import React, { Component } from 'react';

class Price extends Component {

INRprice(){
    
    this.props.onINR()
}

ETHprice(){
    
    this.props.onETH()
}

AUDprice(){
    
    this.props.onAUD()
}


    render() {
 

    return (
     <div  id="projects">
     <div className="dropdown price">
     <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"> USD 
     <span className="caret"></span></button>
     <ul className="dropdown-menu">
     <li><a href="#" onClick={this.INRprice.bind(this) }>INR</a></li>
     <li><a href="#" onClick={this.ETHprice.bind(this) }>ETH</a></li>
     <li><a href="#" onClick={this.AUDprice.bind(this) }>AUD</a></li>
  </ul>
</div>
        </div>
          
        
   );
  }
}

export default Price;
