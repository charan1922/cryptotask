import React, { Component } from 'react';
import ProjectItem from './ProjectItem'


class Projects extends Component {

    render() {

let ProjectItems;
if(this.props.cProjects){
    
    ProjectItems = this.props.cProjects.map((Project)=>{
        return <ProjectItem key={Project.id} Project={Project} />
    });
}

    return (
        <div className="Projects">
      
          {ProjectItems}
        
        </div> 
   );
  }
}

export default Projects;
