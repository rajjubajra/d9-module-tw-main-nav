import {music_bg01, music_bg02, music_bg03, music_bg04, landing1, landing2, landing3, landing4} from '../../assets';
import Gallery001 from './gallery001'
import Gallery002 from './gallery002'
import Gallery003 from './gallery003'


const data = [
  {
    "id":1,
    "image": music_bg01,
    "title": "Magazine 2021",
    "desc": "01-05-2018 (UK), Volume21, B.E 2562, May 2018"
  },
  {
    "id":2,
    "image": music_bg02,
    "title": "Magazine 2020",
    "desc": "01-05-2018 (UK), Volume21, B.E 2562, May 2018"
  },
  {
    "id":3,
    "image": music_bg03,
    "title": "Magazine 2019",
    "desc": "01-05-2018 (UK), Volume21, B.E 2562, May 2018"
  },
  {
    "id":4,
    "image": music_bg04,
    "title": "Magazine 2018",
    "desc": "01-05-2018 (UK), Volume21, B.E 2562, May 2018"
  },
  {
    "id":5,
    "image": landing1,
    "title": "Magazine 2017",
    "desc": "01-05-2018 (UK), Volume21, B.E 2562, May 2018"
  },
  {
    "id":6,
    "image": landing2,
    "title": "Magazine 2016",
    "desc": "01-05-2018 (UK), Volume21, B.E 2562, May 2018"
  },
  {
    "id":7,
    "image": landing3,
    "title": "Magazine 2015",
    "desc": "01-05-2018 (UK), Volume21, B.E 2562, May 2018"
  },
  {
    "id":8,
    "image": landing4,
    "title": "Magazine 2014",
    "desc": "01-05-2018 (UK), Volume21, B.E 2562, May 2018"
  }
]


function Galleries() {
  return (
    <div>
      <div>
        <span className="section">Gallery - 001</span>
        <Gallery001 data={data} />
      </div> 
      <div>
        <span className="section">Gallery - 002</span>
        <Gallery002 data={data} />
      </div>
      <div>
        <span className="section">Gallery - 003</span>
        <Gallery003 data={data} />
      </div> 
    </div>
  )
}

export default Galleries
