import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {Helmet, HelmetProvider} from 'react-helmet-async'

const Page = ({title, children, className, ...rest}) => {
  return (
    <HelmetProvider>
      <div id="Page" className={clsx('Page', className)} {...rest}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
        </Helmet>
        {children}
      </div>
    </HelmetProvider>
  )
}

Page.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Page
