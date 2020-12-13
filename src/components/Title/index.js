import React from 'react'
import PropTypes from 'prop-types'
import './Title.scss'

const Title = ({children, className}) => {
  return <h2 className={`Title Roboto-Black ${className}`}>{children}</h2>
}

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Title
