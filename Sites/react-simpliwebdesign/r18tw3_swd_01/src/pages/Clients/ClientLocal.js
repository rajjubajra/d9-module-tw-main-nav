import PulseIt from '../../media/client-pulseIt.jpg';
import ClientContainer from './ClientContainer';



const data = [
  {
    "title": "Pulse It Recruitement",
    "field_theme_gallery_theme_image": PulseIt,
    "uuid": "4c6d0283-7c19-488b-980c-26b5bc8bb0fa",
    "term_node_tid": "Business, Profile, Wesbite Themes",
    "field_theme_gallery_theme_link": "http://www.pulseitrecruitment.co.uk/"
  },
  
]


function ClientLocal() {

  return (<ClientContainer clientlist={data} />)
}

export default ClientLocal