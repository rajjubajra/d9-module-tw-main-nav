import React from 'react';
import Card from './Card';
import TitleOnTop from '../../components/TitleOnTop';
import UnderConstruction from '../../components/UnderConstruction';


const data = [
  { 
    "id": 1, 
    "title": "CSS Grid System",
    "url": "#",
    "urlType": "internal"
  },
  { 
    "id": 2, 
    "title": "Gsap Animation",
    "url": "#",
    "urlType": "internal"
  },
  { 
    "id": 3, 
    "title": "Tailwindcss",
    "url": "#",
    "urlType": "internal"
  },
  { 
    "id": 4, 
    "title": "Drupal Custom Theme",
    "url": "#",
    "urlType": "internal"
  },
  { 
    "id": 5, 
    "title": "Drupal Webform - RESTful web services",
    "url": "#",
    "urlType": "internal"
  },
  { 
    "id": 6, 
    "title": "Drupal + React js",
    "url": "#",
    "urlType": "internal"
  },
  { 
    "id": 7, 
    "title": "React + Tailwind Components",
    "url": "#",
    "urlType": "internal"
  },

]

function WebResources() {
  return (
    <div className="px-4 w-full">
      <TitleOnTop title="Web Resources" />
      <div className="grid md:grid-cols-4 gap-3">
      {
        data?.map((item,i)=>{
          return <Card key={i} item={item} id={i} />
        })
      }
      </div>
      <UnderConstruction />
    </div>
  )
}

export default WebResources