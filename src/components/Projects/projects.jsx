import React, { PureComponent } from 'react';
import projectsTexts from './text';

class Projects extends PureComponent {
  state = { project: 0 };

  setActiveProject = ({ target: { name: project } }) => this.setState({ project });

  listProjects = (projects) => {
    const { project: activeProject } = this.state;
    const activeProjectIndex = activeProject - 1;
    return projects.map((project, i) => {
      const imageToDisplay = activeProjectIndex === i ? project.picture2 : project.picture;
      return (
        <div className="project_block" key={project.codeUrl}>
          <a href={project.demo}>
            <img
              className={`project_image image_${project.title}`}
              name={i + 1}
              alt=" "
              src={imageToDisplay}
              onMouseOver={this.setActiveProject}
              onFocus={this.setActiveProject}
            />
          </a>
          <div className="project-text">
            <h3 className="project_title">
              {project.title}
            </h3>
            <p className="project_description">
              {project.contex}
            </p>
          </div>
        </div>
      );
    });
  };

  render() {
    const { project: { active } } = this.state;
    return (
      <section className="projects-section">
        <a name="Projects" href="#Projects">
          <h2>
          Projects
          </h2>
        </a>
        <div className="project_title_space">
          {
          active
            ? (
              <React.Fragment>

                <a href={projectsTexts[active - 1].codeUrl} className="project_link">
                  <i className="fab fa-github" />
                </a>
              </React.Fragment>
            )
            : <div />
        }
        </div>
        <div className="projects">
          {this.listProjects(projectsTexts)}
        </div>
        <div className="project_description_space" />
      </section>
    );
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
