import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import {Typography, LinearProgress} from '@material-ui/core'

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 6,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress)

const ProgressSkills = (props) => {
  const {title, progress} = props
  return (
    <div className="progress-skills">
      <div className="flex margin--bottom--10">
        <Typography className="Roboto-Bold flex--start">{title}</Typography>
        <div className="flex-grow--1" />
        <Typography className="Roboto-Bold flex--end">{`${progress.value}%`}</Typography>
      </div>
      <BorderLinearProgress {...progress} />
    </div>
  )
}

ProgressSkills.propTypes = {
  title: PropTypes.node,
  progress: PropTypes.object,
}

export default ProgressSkills
