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
                    <img className="project_image" name={i+1} src={project.picture} onMouseOver={e => this.setActiveProject(e)}/>
                </a>
            </div>
        ))
    }
    render() {
        let active = this.state.project
        const {projects} = this.props
        return (
            <section className="container-fluid">
                <div className="project_title_space">
                    {active?<p className="project_title">{projects[active-1].title}</p>:""}
                    {active?<a href={projects[active-1].codeUrl} className="code_link">Code</a>:""}
                </div>
                <div className="project_images">
                    {this.listProjects(projects)}
                </div>
                <div className="project_description_space">
                    {active?<p className="project_description">{projects[active-1].contex}</p>:""}
                </div>

            </section>
        )
    }


} 

export default Projects;

/* 
Display only one block of text at a time
*/

/* 

        <div className="project_description">
            <p className="project_title">{project.title}</p>
            <p className="project_description">{project.contex}</p>
        </div>
*/