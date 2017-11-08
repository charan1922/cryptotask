import React, { Component } from 'react';
import './Project.css';


class ProjectItem extends Component {

    render() {
 let x ='';
      if(this.props.Project.price_inr){
        x = this.props.Project.price_inr;
        }

        else
        
        if(this.props.Project.price_aud){
          x = this.props.Project.price_aud;
          }
          else 
          
          if(this.props.Project.price_eth){
            x = this.props.Project.price_eth;
            }

            else 

        {
           x= this.props.Project.price_usd; 
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
