import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const ContactInfo = ({className, info}) => {
  const {icon: Icon, title, content} = info
  return (
    <div className={clsx('Contact-Me margin--8', className)}>
      <div className="Contact-Me__item flex">
        {Icon && <Icon className="margin--right--4 color--softOrange" />}
        <div className="color--white">
          <div className="Roboto-Medium margin--bottom--6 font__size--19">{title || ''}</div>
          <div className="Roboto-Light">{content || ''}</div>
        </div>
      </div>
    </div>
  )
}

ContactInfo.propTypes = {
  className: PropTypes.string,
  info: PropTypes.object,
}

export default ContactInfo
