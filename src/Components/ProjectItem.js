import React, { Component } from 'react';



class ProjectItem extends Component {

    render() {

    return (
        <li className="ProjectItem">
        {this.props.Project.name}
        </li>

   );
  }
}

export default ProjectItem;
