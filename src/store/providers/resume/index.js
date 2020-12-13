import React, {createContext} from 'react'
import PropTypes from 'prop-types'
import {user, dark} from '../../values'

const LayoutContext = createContext(user)
export const ResumeProvider = ({children}) => {
  const values = {
    user,
    dark,
  }
  return <LayoutContext.Provider value={values}>{children}</LayoutContext.Provider>
}

LayoutContext.propTypes = {
  children: PropTypes.node,
}

export default LayoutContext
