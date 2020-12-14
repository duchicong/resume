import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import {blueGrey, pink} from '@material-ui/core/colors'

const CssButton = withStyles(() => ({
  root: {
    borderRadius: '45px',
    height: '45px',
    backgroundColor: '#f51457',
    color: '#fff',
    fontWeight: '600',
    minWidth: 200,

    '&:hover': {
      backgroundColor: pink[500],
    },
    '&.Mui-disabled': {
      backgroundColor: blueGrey[600],
    },
  },
}))(Button)

const ButtonElip = ({option, children}) => {
  return <CssButton {...option}>{children}</CssButton>
}

ButtonElip.propTypes = {
  option: PropTypes.object,
  children: PropTypes.node,
}

export default React.memo(ButtonElip)
