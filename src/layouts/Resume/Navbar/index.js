import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {IconButton} from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import Navigation from './Navigation'
import './Navbar.scss'

export const Navbar = () => {
  return (
    <div className="NavBar">
      <div className="Nav-wrapper">
        <Navigation />
      </div>
    </div>
  )
}

export const NavbarMobile = React.memo(({open, onClose}) => {
  if (!open) return null
  return (
    <div className={clsx('NavBar__mobile', {NavBar__mobile__activited: open})}>
      <div className="Nav-wrapper">
        <div className="Nav--header text--right">
          <IconButton color="inherit" onClick={onClose}>
            <HighlightOffIcon color="inherit" fontSize="small" />
          </IconButton>
        </div>
        <Navigation />
      </div>
    </div>
  )
})

NavbarMobile.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
}
