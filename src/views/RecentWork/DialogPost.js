import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardContent, CardMedia, Typography, Chip, IconButton, Link} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import ScheduleIcon from '@material-ui/icons/Schedule'
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined'
import CloseIcon from '@material-ui/icons/Close'
import DialogSizes from '../../components/Dialogs/DialogSizes'
import colors from '../../assets/styles/_variables.scss'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: colors.veryDarkDesaturatedBlue,
    color: colors.white,

    '&.MuiPaper-elevation1': {
      boxShadow: 'none',
    },
  },
  MuiDialogSizes: {
    '& .MuiPaper-root': {
      overflow: 'revert',
    },
  },
  MuiIconButton: {
    position: 'absolute',
    right: '-45px',
    top: 0,
    padding: 5,
  },
  MuiChip: {
    height: 26,
    margin: 6,
    fontSize: '15px',
    fontWeight: 600,
    backgroundColor: colors.moderateRed,
    color: colors.white,
  },
  MuiTypography: {
    display: 'flex',
    alignItems: 'center',
  },
}))
const DialogPost = (props) => {
  const {open, onClose, image, source, title, body, technical, due_date, positions} = props
  const classes = useStyles()

  const positionsRender =
    positions && positions.map((position) => <Chip key={position} label={position} className={classes.MuiChip} />)
  const sourceRender = source ? (
    <div className="source">
      Source:{' '}
      <Link
        href={source.link}
        target="_blank"
        color="inherit"
        classes={{root: 'text--capitalize color--moderateRed'}}
        rel="noopener"
      >
        {source.name}
      </Link>
    </div>
  ) : null

  const actionDialogRender = (
    <IconButton onClick={onClose} className={classes.MuiIconButton}>
      <CloseIcon fontSize="large" htmlColor={colors.white} />
    </IconButton>
  )

  return (
    <div className="Post">
      <DialogSizes
        open={open}
        onClose={onClose}
        classes={{content: {root: 'bg--veryDarkDesaturatedBlue'}}}
        actionProps={actionDialogRender}
        className={classes.MuiDialogSizes}
        fullWidth
        disabledTitle
        disabledAction
      >
        <Card className={classes.root}>
          <CardMedia component="img" alt={title} height="140" image={image} title={title} />
          <CardContent className="padding--left--0 padding--right--0 padding--bottom--8">
            <Typography gutterBottom variant="h5" component="h2" classes={{h5: 'text--bold'}}>
              {title}
            </Typography>
            <Typography gutterBottom align="justify" variant="body1" component="p">
              {body}
            </Typography>
            <Typography gutterBottom variant="body2" component="p" className={classes.MuiTypography}>
              <AssignmentOutlinedIcon fontSize="small" classes={{root: 'margin--right--6'}} /> {technical}
            </Typography>
            <Typography gutterBottom variant="body2" component="p" className={classes.MuiTypography}>
              <ScheduleIcon fontSize="small" classes={{root: 'margin--right--6'}} /> {due_date}
            </Typography>
            <div className="position">
              <Typography variant="body2" component="span">
                Position:
              </Typography>
              {positionsRender}
            </div>
            {sourceRender}
          </CardContent>
        </Card>
      </DialogSizes>
    </div>
  )
}

DialogPost.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  image: PropTypes.string,
  source: PropTypes.object,
  title: PropTypes.string,
  body: PropTypes.string,
  technical: PropTypes.string,
  due_date: PropTypes.string,
  positions: PropTypes.array,
}

export default DialogPost
