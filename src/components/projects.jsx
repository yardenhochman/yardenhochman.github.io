import React, { Component } from 'react';
import CrossfadeImage from 'react-crossfade-image';

class Projects extends Component {
  state = { project: 0 };

  setActiveProject = e => {
    this.setState({ project: e.target.name });
  };

  listProjects = projects => {
    const activeProjectIndex = this.state.project - 1;
    return projects.map((project, i) => {
      const imageToDisplay = activeProjectIndex === i ? project.picture2 : project.picture;
      console.log('image', imageToDisplay);
      return (
        <div className="project_block" key={project.codeUrl}>
          <a href={project.demo}>
            <img
              className={`project_image image_${project.title}`}
              name={i + 1}
              src={imageToDisplay}
              onMouseOver={e => this.setActiveProject(e)}
            />
          </a>
        </div>
      );
    });
  };
  render() {
    const active = this.state.project;
    const { projects } = this.props;
    return <section className="container-fluid">
        <a name="Projects" />
        <h2>Projects</h2>
        <div className="project_title_space">
        {
          active
            ?
          <React.Fragment>
            <p className="project_title">{projects[active - 1].title}</p>
            <a href={projects[active - 1].codeUrl} className="project_link">
              <i class="fab fa-github" />
            </a>
          </React.Fragment>
          :
          <div />
        }
        </div>
        <div className="project_images">{this.listProjects(projects)}</div>
        <div className="project_description_space">
          {active ? <p className="project_description">{projects[active - 1].contex}</p> : ''}
        </div>
      </section>;
  }
}

export default Projects;

/* 
Todo:

-Make mobile version where the image includes the title and text of the project
-Picture will fill up entire width of screen.
-replace image of site generator


legacy:
{active?<a href={projects[active-1].codeUrl} className={`code_link_${projects[active-1].title}`}>View code</a>:""}

*/
