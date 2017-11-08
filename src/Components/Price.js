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
     <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"> {this.props.currency} 
     <span className="caret"></span></button>
     <ul className="dropdown-menu">
     <li><a href="#" onClick={this.INRprice.bind(this) }> {this.props.currency==='INR' ? "\u2714" : ''} INR</a></li>
     <li><a href="#" onClick={this.ETHprice.bind(this) }> {this.props.currency==='ETH' ? "\u2714" : ''} ETH</a></li>
     <li><a href="#" onClick={this.AUDprice.bind(this) }> {this.props.currency==='AUD' ? "\u2714" : ''} AUD</a></li>
  </ul>
</div>
        </div>
          
        
   );
  }
}

export default Price;
