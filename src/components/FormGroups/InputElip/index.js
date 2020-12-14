import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import variables from '../../../assets/styles/_variables.scss'

const CssTextField = withStyles({
  root: {
    '& .MuiInputBase-root': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: 20,

      '& fieldset': {
        borderColor: variables.softOrange,
      },
      '&:hover fieldset': {
        borderColor: variables.softOrange,
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField)

const InputElip = ({option}) => {
  return <CssTextField {...option} variant="outlined" size="small" />
}

InputElip.propTypes = {
  option: PropTypes.object,
}

export default React.memo(InputElip)
