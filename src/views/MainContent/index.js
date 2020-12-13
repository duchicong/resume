import React from 'react'
import {Page} from '../../components'
import HeaderMain from '../HeaderMain'
import AboutMe from '../AboutMe'
import Experience from '../Experience'
import ContactMe from '../ContactMe'
import RecentWork from '../RecentWork'
import './MainContent.scss'

const Content = () => {
  return (
    <Page title="Du Cong Resume">
      <div className="Main-Content">
        <HeaderMain />
        <AboutMe />
        <Experience />
        <RecentWork />
        <ContactMe />
      </div>
    </Page>
  )
}

export default Content
