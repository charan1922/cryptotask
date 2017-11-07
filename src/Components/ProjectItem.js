import React, { Component } from 'react';



class ProjectItem extends Component {

    render() {

    return (

        <tbody className="ProjectItem">
        <tr>
        {this.props.Project.id}
        </tr>
      </tbody>
        

   );
  }
}

export default ProjectItem;
