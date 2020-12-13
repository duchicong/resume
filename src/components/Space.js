import React from 'react'
import PropTypes from 'prop-types'

const Space = ({width, height}) => {
  return <div className="space" style={{width, height}}></div>
}

Space.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}

export default Space
