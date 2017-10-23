import React from 'react';

  const Intro = ({intro:{name,occupation,email,sm:{instagram,twitter,linkedIn}}}) => (
    <section className="container-fluid">
      <div className="link_box"><a href="#projects" class="link"><div className="link_symbol" />Projects</a></div>
      <div className="link_box"><a href="#bio" class="link"><div className="link_symbol" />Bio</a></div>
      <div className="viewcenter">
        <h1 className="name">{name}</h1>
        <div className="centerLine">
          {/* <a className="email link" href={`mailto:${email}`} title={`Email ${name}`} >Contact</a> */}
          <p className="occupation">{occupation}</p>
        </div>
      </div>
      <footer>
        <div className="social_media_links">
          <a href={`https://twitter.com/${twitter}`}><div className="twitter" /></a>
          <a href={`https://github.com/yardenhochman/yardenhochman.github.io/raw/master/file/Yarden%20Hochman%20CV.pdf`} className="resume"/>
          <a href={`mailto:${email}`}><div className="mail" /></a>
          <a href={`https://www.linkedin.com/${linkedIn}`}><div className="linkedin" /></a>
        </div>
      </footer>
    </section>
   )
export default Intro;

/* 
add link to scroll down and see projects, CV, Bio



<header>
  <div id="toplinks">
    <a href="http://www.gary-chin.com"> gary chin </a><br/>
    <a href="#aboutme"> about me </a><br/>
    <a href="#skills"> skills </a><br/>
    <a href="#mywork"> projects </a><br/> 
    <a href="#contactme"> contact </a><br/> 
  </div>
</header> 


*/