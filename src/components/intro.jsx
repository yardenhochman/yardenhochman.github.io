import React from 'react';

  const Intro = ({intro:{name,occupation,email,sm:{instagram,twitter,linkedIn,github}}}) => (
    <section className="container-fluid">
      <div className="links">
        <div className="link_box"><a href="#projects" class="link">{/* <div className="link_symbol" /> */}<p className="link_text">#Projects</p></a></div>
        <div className="link_box"><a href="#bio" class="link">{/* <div className="link_symbol" /> */}<p className="link_text">#Bio</p></a></div>
      </div>
      <div className="viewcenter">
        <h1 className="name">{name}</h1>
        <div className="centerLine">
          {/* <a className="email link" href={`mailto:${email}`} title={`Email ${name}`} >Contact</a> */}
          <p className="occupation">{occupation}</p>
        </div>
      </div>
      <footer>
        <div className="social_media_links">
          <a title="Github" target="_blank" href={`https://github.com/${github}`} ><div className="github" /></a>
          {/* <a href={`https://twitter.com/${twitter}`}><div className="twitter" /></a> */}
          <a title="Resume" target="_blank" href={`https://github.com/yardenhochman/yardenhochman.github.io/raw/master/src/file/Yarden%20Hochman%20CV.pdf`} className="resume"/>
          <a title="Email" href={`mailto:${email}`}><div className="mail" /></a>
          <a title="LinkedIn" target="_blank" href={`https://www.linkedin.com/in/${linkedIn}`}><div className="linkedin" /></a>
        </div>
      </footer>
    </section>
   )
export default Intro;

/* 

Todo:
-Make "Social Media Links" smaller when width exceeds 700 px
*/