import React, { Component } from 'react';



class ProjectItem extends Component {

    render() {

    return (
        <li className="ProjectItem">
        {this.props.Project.id}
        </li>

   );
  }
}

export default ProjectItem;
