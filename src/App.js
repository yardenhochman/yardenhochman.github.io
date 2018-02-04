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
  const projects = [
    {
      title: 'Acroyoga Pose Finder',
      picture: 'http://res.cloudinary.com/dz2nxhscn/image/upload/v1517175181/acroyoga_c8rpu1.jpg',
      picture2: 'http://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/nwopffou6upu9ltzzyzx.jpg',
      demo: 'https://acroindex.herokuapp.com',
      codeUrl: 'https://github.com/yardenhochman/Acroyoga',
      contex:
        'This website helps you quickly find Acroyoga poses on the go. Features a responsive design, swiping functionality on mobile, and a favorites list feature for registered users.',
    },
    {
      title: 'SoundLand',
      picture: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1041163-200.png',
      picture2: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1041163-200.png',
      demo: 'https://genremap.herokuapp.com/',
      codeUrl: 'https://github.com/yardenhochman/GenreLand',
      contex:
        'A Collaborative project, intended to research the relationship between musical tastes and location, and facilitate connections between people with similar musical tastes.',
    },
    /* {
      title: 'Visual Weather',
      picture:
        'http://oi66.tinypic.com/2z7ifqr.jpg',
      demo: 'https://weather1989.herokuapp.com/',
      codeUrl:
        'https://github.com/yardenhochman/Visual-Weather',
      contex:
        'A weather app with automatic location detection and API for local weather forecast. Aims to represent the forecast visually, no text.'
    }, */
    {
      title: 'Simon Says',
      picture: 'http://i67.tinypic.com/35344gk.jpg',
      demo: 'https://yardenhochman.github.io/Simon-Says',
      codeUrl: 'https://github.com/yardenhochman/Simon-Says',
      contex: 'A memory game written based entirely off constructors, all in ECMAScript2015 standard code.',
      picture2: 'http://res.cloudinary.com/dz2nxhscn/image/upload/v1517201557/active_simon_Says_dhkepc.jpg',
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
  ];
  const vc = {
    VCFile: {
      link: './file/Yarden Hochman CV.pdf',
    },
  };
  const bio = {
    myPicUrl: 'http://alturl.com/ft42i',
    description:
      'A multi-disciplinary programmer with full stack web development experience, looking for opportunities to develop engaging websites for products people need. I’m an idealist autodidact who loves to experiment and uncover the optimal path for each challenge I face.',
  };
  return (
    <main>
      <Intro intro={intro} />
      <Projects projects={projects} />
      <Bio bio={bio} vc={vc} />
    </main>
  );
};

export default App;
