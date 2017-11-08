import React, { Component } from 'react';
import './Project.css';
var NF = require('react-number-format')

class ProjectItem extends Component {

    render() {
 let x ='';
      if(this.props.Project.price_inr){
       
        x= <NF value= {this.props.Project.price_inr} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'₹'} />
        }

        else
        
        if(this.props.Project.price_aud){
          
          x = <NF value= {this.props.Project.price_aud} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'} />
          }
          else 
          
          if(this.props.Project.price_eth){
            
            x = <NF value= {this.props.Project.price_eth} displayType={'text'} decimalPrecision={2} thousandSeparator={true} suffix={'  ETH'} />
            }

            else 

        {
          
           x= <NF value= {this.props.Project.price_usd} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'} />
        }
        

    return (
        
        <div  id="crypto-container">
       <span className="left"> {this.props.Project.name} </span>
      
        <span className="right" >{x} </span>
       
         </div>

   );
  }
}

export default ProjectItem;
