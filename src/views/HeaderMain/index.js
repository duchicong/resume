import React, {useContext, useState} from 'react'
import {Link, Button} from '@material-ui/core'
import LayoutContext from '../../store/providers/resume'
import './HeaderMain.scss'

const HeaderMain = () => {
  const context = useContext(LayoutContext)
  const [position, setPosition] = useState(null)
  const {user} = context

  React.useEffect(() => {
    let mounted = true

    if (mounted) {
      setPosition(user.positions[1].name)
    }

    return () => {
      mounted = false
    }
  }, [user])

  React.useEffect(() => {
    let i = 1
    setInterval(() => {
      i++
      if (i % 2 === 0) {
        setPosition(user.positions[0].name)
      } else setPosition(user.positions[1].name)
    }, 3000)
  }, [user])

  const listFollows =
    user &&
    user?.follows.map((follow) => {
      const Icon = follow.icon
      return (
        <Link href={follow.url} key={follow.id} target="_blank" className="follow__item">
          <Icon color="inherit" className="item__icon" />
        </Link>
      )
    })
  return (
    <div id="Header-main" className="Header-main">
      <div className="Header-main__content">
        <div className="infomation">
          <img src={user.picture} alt={user.name} className="my-picture" />
          <div className="Author Roboto-Black text--center font__size--22">{user.author}</div>
          <div className="position__name  text--center Roboto-Medium">{`I'am a ${position}`}</div>
          <div className="follows">{listFollows}</div>
          <Button classes={{root: 'Hire-me Roboto-Black'}} color="inherit" variant="contained" href="/#Contact-Me">
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeaderMain
