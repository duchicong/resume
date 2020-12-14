import React, {useState, useEffect} from 'react'
import {Hidden} from '@material-ui/core'
import Topbar from './Topbar'
import {Navbar, NavbarMobile} from './Navbar'
import Content from '../../views/MainContent'

const LayoutResume = () => {
  const [openNavbar, setOpenNavbar] = useState(false)

  useEffect(() => {
    const body = document.getElementsByTagName('body')
    if (openNavbar) {
      body[0].style.overflow = 'hidden'
    } else body[0].removeAttribute('style')
  }, [openNavbar])

  return (
    <div className="Layout-Resume">
      <Hidden mdUp>
        <Topbar open={openNavbar} onClick={() => setOpenNavbar(!openNavbar)} />
        <NavbarMobile open={openNavbar} onClose={() => setOpenNavbar(false)} />
      </Hidden>
      <Hidden smDown>
        <Navbar />
      </Hidden>
      <Content />
    </div>
  )
}

export default LayoutResume
