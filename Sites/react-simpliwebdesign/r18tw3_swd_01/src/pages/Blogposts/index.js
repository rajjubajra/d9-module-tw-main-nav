import React from 'react';
import Card from './Card';
import TitleOnTop from '../../components/TitleOnTop';
import UnderConstruction from '../../components/UnderConstruction';


const data = [
  { 
    "id": 1, 
    "title": "Food",
    "url": "#",
    "urlType": "internal"
  },
  { 
    "id": 2, 
    "title": "Technology",
    "url": "#",
    "urlType": "internal"
  },
  { 
    "id": 3, 
    "title": "Music",
    "url": "#",
    "urlType": "internal"
  },
  { 
    "id": 4, 
    "title": "Minimalist Lifestyle",
    "url": "#",
    "urlType": "internal"
  },
  { 
    "id": 5, 
    "title": "Climate Change",
    "url": "#",
    "urlType": "internal"
  }
  
]


function Blogposts() {
  return (
    <div className="md:px-5 w-full">
      <TitleOnTop title="Blog Posts" />
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

export default Blogposts