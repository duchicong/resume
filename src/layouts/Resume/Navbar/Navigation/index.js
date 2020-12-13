import React, {useContext, useState} from 'react'
import clsx from 'clsx'
import {Link} from '@material-ui/core'
import navConfigs from './navConfigs'
import LayoutContext from '../../../../store/providers/resume'
import './Navigation.scss'

const Navigation = () => {
  const context = useContext(LayoutContext)
  const [hash, setHash] = useState(window.location.hash)
  const {user} = context
  const listNav = navConfigs.items.map((item) => {
    const Icon = item.icon
    return (
      <li key={item.label} className="item-nav">
        <Link
          href={item.href}
          onClick={() => setHash(item.href)}
          color="inherit"
          className={clsx('link__nav Roboto-Light text--center', hash === item.href ? 'link__nav--actived' : null)}
        >
          <Icon />
          <span className="label__link block">{item.label}</span>
        </Link>
      </li>
    )
  })

  return (
    <div className="Navigation">
      <div className="wrapper">
        <div className="infomation">
          <img src={user.picture} alt={user.name} className="my-picture" />
          <div className="Author Roboto-Black text--center font__size--22">{user.author}</div>
          <div className="position__name  text--center Roboto-Light">{user.positions[0].name}</div>
        </div>
        <ul className="List">{listNav}</ul>
      </div>
    </div>
  )
}

export default Navigation
