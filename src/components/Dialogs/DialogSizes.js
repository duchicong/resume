import React from 'react'
import PropTypes from 'prop-types'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core'

const DialogSizes = (props) => {
  const {
    open,
    onClose,
    onClick,
    classes,
    fullWidth,
    maxWidth,
    children,
    disabledTitle,
    titleProps,
    disabledAction,
    actionProps,
    title,
    ...rest
  } = props
  const classRoles = {
    title: {},
    action: {},
    actionClose: {},
    actionAccept: {},
    content: {},
    ...classes,
  }

  const dialogTitleRender = !disabledTitle && (
    <DialogTitle id="max-width-dialog-title" classes={classRoles.title}>
      {title}
    </DialogTitle>
  )
  const dialogActionRender = !disabledAction && (
    <DialogActions classes={classRoles.action}>
      <Button onClick={onClose} classes={classRoles.actionClose}>
        Close
      </Button>
      <Button onClick={onClick} color="primary" classes={classRoles.actionAccept}>
        Accept
      </Button>
    </DialogActions>
  )

  const ref = React.createRef()
  return (
    <Dialog ref={ref} fullWidth={fullWidth} maxWidth={maxWidth} open={open} onClose={onClose} {...rest}>
      {titleProps || dialogTitleRender}
      <DialogContent classes={classRoles.content}>
        <>{children}</>
      </DialogContent>
      {actionProps || dialogActionRender}
    </Dialog>
  )
}

DialogSizes.defaultProps = {
  open: false,
  disabledAction: false,
  disabledTitle: false,
  fullWidth: false,
  title: 'This is title',
  maxWidth: 'sm',
}

DialogSizes.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onClick: PropTypes.bool,
  disabledAction: PropTypes.bool,
  disabledTitle: PropTypes.bool,
  fullWidth: PropTypes.bool,
  title: PropTypes.string,
  classes: PropTypes.object,
  maxWidth: PropTypes.string,
  children: PropTypes.node,
  titleProps: PropTypes.node,
  actionProps: PropTypes.node,
}

export default DialogSizes
