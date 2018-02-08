import React from 'react';
import './App.css';
import Intro from './components/intro';
import Projects from './components/projects';
import Bio from './components/bio';

const App = () => {
  const intro = {
    name: 'Yarden Hochman',
    email: 'yyyarden@gmail.com',
    occupation: 'Full Stack Web Developer',
    sm: {
      instagram: 'yardenhochman',
      twitter: 'YardenH2',
      linkedIn: 'yardenhochman',
      github: 'yardenhochman',
    },
  };
  const projects = [{ title: 'Acroyoga Pose Finder', picture: 'http://res.cloudinary.com/dz2nxhscn/image/upload/v1517175181/acroyoga_c8rpu1.jpg', picture2: 'http://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/nwopffou6upu9ltzzyzx.jpg', demo: 'https://findpose.herokuapp.com', codeUrl: 'https://github.com/yardenhochman/Acroyoga', contex: 'A Full Stack Progressive SPA developed for the Acroyoga community. Features a responsive design with swiping, user favorites and token authentication.' }, { title: 'SoundLand', picture: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1041163-200.png', picture2: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1041163-200.png', demo: 'https://genremap.herokuapp.com/', codeUrl: 'https://github.com/yardenhochman/GenreLand', contex: 'A Collaborative project from my time at General Assembly. Attempts to qualify the relationship between musical tastes and location, and facilitate connections between people with similar musical tastes.' }, /* {
      title: 'Visual Weather',
      picture:
        'http://oi66.tinypic.com/2z7ifqr.jpg',
      demo: 'https://weather1989.herokuapp.com/',
      codeUrl:
        'https://github.com/yardenhochman/Visual-Weather',
      contex:
        'A weather app with automatic location detection and API for local weather forecast. Aims to represent the forecast visually, no text.'
    }, */
    { title: 'Simon Says', picture: 'http://i67.tinypic.com/35344gk.jpg', demo: 'https://yardenhochman.github.io/Simon-Says', codeUrl: 'https://github.com/yardenhochman/Simon-Says', contex: 'My first Javascript project. A memory game written in ES6 and based entirely off constructors.', picture2: 'http://res.cloudinary.com/dz2nxhscn/image/upload/v1517201557/active_simon_Says_dhkepc.jpg' }];

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
  const vc = {
    VCFile: {
      link: './file/Yarden Hochman CV.pdf',
    },
  };
  const bio = { myPicUrl: 'http://res.cloudinary.com/dz2nxhscn/image/upload/v1518082300/AAIAAQDGAAwAAQAAAAAAAAuIAAAAJDdkMGRlYzMwLTFhYmQtNGFhZS1iMGZkLTA4NTE1NzgwZmUxMw_ih7od2.jpg', description: `I'm a programmer with full stack web development experience, looking for opportunities to develop engaging websites for solutions people need. I love to experiment and uncover the optimal path for the challenge before me. Let's talk!` };
  return (
    <main>
      <Intro intro={intro} />
      <Projects projects={projects} />
      <Bio bio={bio} vc={vc} />
    </main>
  );
};

export default App;
