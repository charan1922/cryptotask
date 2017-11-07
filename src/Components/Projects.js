import React, { Component } from 'react';
import ProjectItem from './ProjectItem'


class Projects extends Component {

    render() {

let ProjectItem;
if(this.props.cProjects){
    
    ProjectItem = this.props.cProjects.map((Project)=>{
        return <ProjectItem key={Project.id} Project={Project} />
    });
}

    return (
        <div className="Projects">
        Table Project
          {ProjectItem}
        
        </div> 
   );
  }
}

export default Projects;
