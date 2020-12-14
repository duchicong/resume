import React, {Suspense} from 'react'
import {Page} from '../../components'
import './MainContent.scss'
const HeaderMain = React.lazy(() => import('../HeaderMain'))
const AboutMe = React.lazy(() => import('../AboutMe'))
const Experience = React.lazy(() => import('../Experience'))
const ContactMe = React.lazy(() => import('../ContactMe'))
const RecentWork = React.lazy(() => import('../RecentWork'))

const Content = () => {
  return (
    <Page title="Du Cong Resume">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="Main-Content">
          <HeaderMain />
          <AboutMe />
          <Experience />
          <RecentWork />
          <ContactMe />
        </div>
      </Suspense>
    </Page>
  )
}

export default Content
