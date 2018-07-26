import React from 'react';
import text from './text';

const Intro = () => {
  const {
    name, occupation, email, CV, sm: { linkedIn, github },
  } = text;
  return (
    <header>
      <nav className="links">
        <div className="link_box">
          <a href="#Projects" className="link">
            {/* <div className="link_symbol" /> */}
            <p className="link_text">
              #Projects
            </p>
          </a>
        </div>
        <div className="link_box">
          <a href="#bio" className="link">
            {/* <div className="link_symbol" /> */}
            <p className="link_text">
              #About me
            </p>
          </a>
        </div>
      </nav>
      <div className="viewcenter">
        <h1 className="name">
          {name}
        </h1>
        <div className="centerLine">
          {/* <a className="email link" href={`mailto:${email}`} title={`Email ${name}`} >Contact</a> */}
          <p className="occupation">
            {occupation}
          </p>
        </div>
      </div>
      <footer>
        <div className="social_media_links">
          <a title="Github" target="_blank" rel="noopener noreferrer" href={`https://github.com/${github}`}>
            <div className="github" />
          </a>
          <a
            title="Resume"
            target="_blank"
            href={CV}
            rel="noopener noreferrer"
          >
            <div className="resume" />
          </a>
          <a title="Email" href={`mailto:${email}`}>
            <div className="mail" />
          </a>
          <a title="LinkedIn" target="_blank" href={`https://www.linkedin.com/in/${linkedIn}`}>
            <div className="linkedin" />
          </a>
        </div>
      </footer>
    </header>
  );
};
export default Intro;

/*

Todo:
-Make "Social Media Links" smaller when width exceeds 700 px
*/
