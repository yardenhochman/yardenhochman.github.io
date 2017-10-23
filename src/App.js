import React from 'react';
import './App.css';
import Intro from './components/intro'
import Projects from './components/projects'
import Bio from './components/bio'
const App = () => {
   
  const intro = {
                  name:"Yarden Hochman",email:"yyyarden@gmail.com",
                  occupation:"Full Stack Web Developer",email:"yyyarden@gmail.com",
                  sm:{instagram:"yardenhochman",twitter:"YardenH2",linkedIn:"yardenhochman"}
    }
  const projects = [
    {
      title:"Your Online Page",
      picture:"https://s1.postimg.org/6l5nmmgqv3/online_Page_Setup.jpg",
      demo:"https://sitegenerator-front.herokuapp.com/welcome/setup",
      codeUrl:"https://github.com/yardenhochman/create_your_page",
      contex:"A quick setup process that allows visitors to easily establish online presence"
    },
    {
      title:"Simon Says",
      picture:"http://i67.tinypic.com/35344gk.jpg",
      demo:"https://yardenhochman.github.io/projectOne",
      codeUrl:"https://github.com/yardenhochman/projectOne",
      contex:"A memory game written based entirely off constructors, all in ECMAScript2015 standard code."
    },
    /* {
      title:"Weather Sense",
      picture:"",
      demo:"https://weather1989.herokuapp.com/",
      codeUrl:"https://git.generalassemb.ly/yardenH/project2",
      contex:"This website lets you get a sense of the weather outside. No numbers."
    },
    {
      title:"GenreLand",
      picture:"",
      demo:"https://cryptic-mountain-94096.herokuapp.com/",
      codeUrl:"https://github.com/yardenhochman/GenreLand",
      contex:"A platform for understanding musical taste in relation to location"
    }, */
  ]
  const vc = { VCFile:{link:"./file/Yarden Hochman CV.pdf"} }
  const bio = 
  { 
    myPicUrl:"http://alturl.com/ft42i", 
    description:"A multi-disciplinary programmer with full stack web development experience, looking for opportunities to develop engaging websites for products people need. I’m an idealist autodidact who loves to experiment and uncover the optimal path for each challenge I face.",
  }
    return (
        <main>
          <Intro intro={intro} />
          <Projects projects={projects} />
          <Bio bio={bio} vc={vc}/>
        </main>
    );
  }


export default App;
