import React, { Component } from 'react';


class Projects extends Component {
    constructor() {
        super();
        this.state = {project: 0}
    }

    setActiveProject(e) {
        this.setState({project: e.target.name})
    }

    listProjects(projects) {
        return projects.map( (project,i) => (
            <div className="project_block" key={project.codeUrl}>
                <a href={project.demo} >
                    <img className={`project_image image_${project.title}`} name={i+1} src={project.picture} onMouseOver={e => this.setActiveProject(e)}/>
                </a>
            </div>
        ))
    }
    render() {
        let active = this.state.project
        const {projects} = this.props
        return (
            <section className="container-fluid">
                <a name="projects"/>
                <div className="project_title_space">
                    {active?<p className="project_title">{projects[active-1].title}</p>:""}
                    
                </div>
                <div className="project_images">
                    {this.listProjects(projects)}
                </div>
                <div className="project_description_space">
                    {active?<p className="project_description">{projects[active-1].contex}</p>:""}
                    {active?<a href={projects[active-1].codeUrl} className={`code_link_${projects[active-1].title}`}>Code</a>:""}
                </div>

            </section>
        )
    }


} 

export default Projects;


