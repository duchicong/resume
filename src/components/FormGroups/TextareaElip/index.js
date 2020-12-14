import React from 'react'
import PropTypes from 'prop-types'
import './TextareaElip.scss'

const TextareaElip = ({option}) => {
  return (
    <div className="Textarea-Elip">
      <textarea {...option} />
    </div>
  )
}

TextareaElip.propTypes = {
  option: PropTypes.object,
}

export default React.memo(TextareaElip)
