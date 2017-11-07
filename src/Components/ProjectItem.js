import React, { Component } from 'react';
import './Project.css';


class ProjectItem extends Component {

    render() {

    return (
        
        <div  id="crypto-container">
       <span className="left"> {this.props.Project.name} </span>
       <span className="right" >{this.props.Project.price_usd} </span>
         </div>

   );
  }
}

export default ProjectItem;
