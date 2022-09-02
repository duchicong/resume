import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import BookIcon from '@material-ui/icons/Book'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
import FavoriteIcon from '@material-ui/icons/Favorite'
import SpeedIcon from '@material-ui/icons/Speed'
import GroupWorkIcon from '@material-ui/icons/GroupWork'
import LoopIcon from '@material-ui/icons/Loop'
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet'
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream'

const {PUBLIC_URL} = process.env

export default {
  author: 'Du Cong',
  email: 'duconggpdg@gmail.com',
  description:
    "I'm Cong, I live in Hanoi, have 2 years of experience with projects outside of Japan, like writing web apps, open-source and web platforms. Right now I'm Frontend Developer but my target is Full-stack with javascript (reactjs, vuejs).",
  phone: '0399557228',
  address: 'Hoa Phu commune - Ung Hoa district - Ha Noi city - Viet Nam',
  picture: `${PUBLIC_URL}/images/me.jpg`,
  cover: '',
  follows: [
    {id: 1, icon: GitHubIcon, url: 'https://github.com/duchicong'},
    {id: 2, icon: BookIcon, url: 'https://duchicong.github.io'},
    {id: 3, icon: FacebookIcon, url: 'https://facebook.com/duchicong'},
  ],
  positions: [
    {id: 1, name: 'Web developer'},
    {id: 2, name: 'UI/UX Design'},
  ],
  workSkills: [
    {
      icon: GroupWorkIcon,
      name: 'Team Work',
      description: 'sociable, enthusiastic ...',
    },
    {
      icon: SpeedIcon,
      name: 'Performance',
      description: 'Optimized render, life cycle, code iteration',
    },
    {
      icon: LoopIcon,
      name: 'Reuse',
      description: 'reuse components, functions, code...',
    },
    {
      icon: SettingsEthernetIcon,
      name: 'Format code',
      description: 'Eslint, Prettier...',
    },
    {
      icon: SettingsSystemDaydreamIcon,
      name: 'REST API',
      description: 'Rest APIs of Laravel',
    },
  ],
  habits: [
    {
      icon: MenuBookIcon,
      title: 'Books',
    },
    {
      icon: MusicNoteIcon,
      title: 'Mucsic',
    },
    {
      icon: SportsEsportsIcon,
      title: 'Sports',
    },
    {
      icon: FavoriteIcon,
      title: 'Volunteer',
    },
  ],
}
