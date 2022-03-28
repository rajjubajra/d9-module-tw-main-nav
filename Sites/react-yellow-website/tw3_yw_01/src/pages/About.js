import {useEffect, useState} from 'react';
import AboutCard from '../components/AboutCard';
import HowDoIWork from '../components/HowDoIWork';
import Title from '../components/Title';
import {gsap} from 'gsap';
import Logo from '../components/Logo';
import {useSelector, useDispatch} from 'react-redux';
import { actionAboutPage } from '../redux/aboutpageSlice';


const skill_tool = [
  {
    "id": 1, 
    "title": "Skill",
    "text": "Web Design / Graphic Design / Drupal Theming / HTML, CSS and Javascript / React js and React-Redux"
  },
  {
    "id": 1, 
    "title": "Tools",
    "text": " Drupal JSONAPI, RESTful Web Services, React js, Redux-toolkit, tailwindcss and gsap"
  }
]


const howdoIwork = [
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


function About() {

  /** FETCH DATA */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionAboutPage())
  },[dispatch])

  const {data, included} = useSelector(state => state.about_page.aboutpage)
  const {aboutpage_loading, aboutpage_fetched} = useSelector(state => state.about_page)

  console.log(data, included, aboutpage_loading, aboutpage_fetched);

  /** Fetch data re-organise in to an new array */
  useEffect(() => {
      let arr_skillTool = [];
      let arr_howdoiwork = [];
      let arr_steps = [];
      aboutpage_fetched && included.map(item=>{
        
      const {parent_field_name, field_list_title, field_list_body, incl} = item.included.attributes;
        
      console.log(parent_field_name);
      return parent_field_name === 'field_skill_and_tools'
        ? arr_skillTool.push({
          "id": item.id,
          "title": incl.field_title,
          "text": incl.field_yw_skills.value
        })
        : arr_steps.push({
                "step": field_list_title,
                "text": field_list_body
              })
      })

      aboutpage_fetched && data.map(item=>{
        
        const {id, field_how_do_i_work_title} = item.attributes;

        return arr_howdoiwork.push({
          "id": id,
          "title": field_how_do_i_work_title,
          "steps": []
        })
      })

      setSkillTools(arr_skillTool);
      setHowDoIwork(arr_howdoiwork)

  },[aboutpage_fetched, data, included])


  const [skillTools, setSkillTools] = useState([]);
  const [howDoIwork, setHowDoIwork]= useState([]);


  console.log(howDoIwork, skillTools);


  /** gsap animation */
  useEffect(()=>{
    gsap.from('.title',{ duration:0.5, opacity: 0})
    gsap.from('.about',{ delay:0.3, duration:0.5, opacity: 0, stagger:0.5})
    gsap.to('.text',{ delay:0.2, duration:1, opacity: 1, stagger: 0.4})
  },[]);

  return (
    <div className="relative mt-5">
      <div className="w-full grid grid-cols-12">
          {/** ABOUT BLOCK */}
          <div className="md:col-span-8 md:translate-y-0  col-span-7">
            <div className="flex justify-center items-center flex-col w-full h-screen">
              <div className="w-full flex justify-end mb-10">
                <Logo />
              </div>
              <div className="md:px-6 md:text-xl text-xs">
                  {
                    skill_tool.length > 0 &&
                    skill_tool.map((item,index)=>{
                      return <AboutCard key={index} title={item.title} text={item.text} />
                    })
                  }
                  <div className="mt-2">
                    <HowDoIWork data={howdoIwork} />
                  </div>
              </div>
            </div>
          </div>
          {/** PAGE TITLE */}  
          <div className="col-span-2 lg:translate-x-0 md:-translate-x-24">
            <Title title="About" />
          </div>
      </div>
    </div>
  
  )
}

export default About
