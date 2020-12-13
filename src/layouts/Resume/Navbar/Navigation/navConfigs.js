import HomeIcon from '@material-ui/icons/Home'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import SchoolIcon from '@material-ui/icons/School'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import LayersIcon from '@material-ui/icons/Layers'

export default {
  name: 'Navigation',
  description: 'Navigation Configs',
  items: [
    {icon: HomeIcon, label: 'Home', href: '#Page'},
    {icon: PersonOutlineIcon, label: 'About Me', href: '#About-Me'},
    {icon: SchoolIcon, label: 'Experience', href: '#Experience'},
    {icon: LayersIcon, label: 'Recent Works', href: '#Recent-Works'},
    {icon: QuestionAnswerIcon, label: 'Contact', href: '#Contact-Me'},
  ],
}
