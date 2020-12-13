import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import colors from '../../assets/styles/_variables.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    borderRadius: '16px',
    transition: '0.5s',
    border: '2px solid #fff',

    '&:hover': {
      borderRadius: 0,
      border: '2px solid ' + colors.softOrange,
    },

    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    },
  },
  MuiCardActionArea: {
    position: 'relative',
    height: 200,
  },
  MuiCardMedia: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0,
  },
}))
const Post = (props) => {
  const {image, title, onOpen} = props
  const classes = useStyles()

  return (
    <div className="Post">
      <Card className={classes.root}>
        <CardActionArea onClick={onOpen} className={classes.MuiCardActionArea}>
          <CardMedia alt={title} image={image} className={classes.MuiCardMedia} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

Post.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  technical: PropTypes.string,
  due_date: PropTypes.string,
  positions: PropTypes.array,
}

export default Post
