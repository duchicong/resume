import React from 'react'
import LayoutResume from './layouts/Resume'
import {ResumeProvider} from './store/providers/resume'
import './shared/mock'

function App() {
  return (
    <div>
      <ResumeProvider>
        <LayoutResume />
      </ResumeProvider>
    </div>
  )
}

export default App
