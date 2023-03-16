import {useEffect, useState} from 'react';

import AboutConatiner from './AboutConatiner';


const local_skills_tools = [
  {
    "id": 1, 
    "title": "Let's create an online home for your business",
    "text": "I will create a website for your business that will clearly reflects your identities, experties, services and values. So that you can spend less time on sales conversations and more on other business."
  },
  {
    "id": 2, 
    "title": "I am based in London, UK",
    "text": "Don't worry about the time zone. I am happy to work with the clients from all over the world."
  },
  {
    "id": 3, 
    "title": "Skill",
    "text": "Web Design / Graphic Design / Drupal Theming / HTML, CSS and Javascript / React js and React-Redux"
  },
  {
    "id": 4, 
    "title": "Tools",
    "text": " Drupal JSONAPI, RESTful Web Services, React js, Redux-toolkit, tailwindcss and gsap"
  },
  
]



const local_howdoIwork = [
  {
    "id": 1,
    "title": "How do I work",
    "steps": [
      {
        "step": 1,
        "text": "Select a Website Theme from the gallery"
      },
      {
        "step": 2,
        "text": "I will customize the theme as per your need"
      },
      {
        "step": 3,
        "text": "Deploy the website"
      },
    ]
  }
]


function AboutLocal() {
 
  /** Fetch data re-organise in to an new array */
  const [skillsTools, setSkillsTools] = useState([]);
  const [howDoIwork, setHowDoIwork]= useState([]);
  
  useEffect(()=>{
    setSkillsTools(local_skills_tools) 
    setHowDoIwork(local_howdoIwork)
  },[])


  return (
    <AboutConatiner skillsTools={skillsTools} howDoIwork={howDoIwork} />
  )
}

export default AboutLocal