import React, {useContext} from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {Button, Slide, useScrollTrigger} from '@material-ui/core'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import LayoutContext from '../../../store/providers/resume'
import './Topbar.scss'

function HideOnScroll(props) {
  const {children, window} = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({target: window ? window() : undefined})

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

const Topbar = (props) => {
  const {open, onClick} = props
  const context = useContext(LayoutContext)
  const {user} = context

  return (
    <HideOnScroll {...props}>
      <div className={clsx('Topbar-Mobile', {push: open})}>
        <div className="wrapper">
          <div className="content">
            <div className="content--item flex">
              <Button variant="contained" className="btn--Navbar" onClick={onClick}>
                <MenuOpenIcon />
              </Button>
              <div className="infomation">
                <img src={user.picture} alt={user.name} className="my-picture item" />
                <div className="Author item uppercase Roboto-Black text--center font__size--22 font__size-xs--19">
                  {user.author}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HideOnScroll>
  )
}

Topbar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
}

export default Topbar
