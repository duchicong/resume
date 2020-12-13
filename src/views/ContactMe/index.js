import React, {useContext, useState} from 'react'
import axios from 'axios'
import {Grid, Container, FormHelperText, Snackbar, Typography} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import CircularProgress from '@material-ui/core/CircularProgress'
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined'
import {Title, Space, ContactInfo} from '../../components'
import LayoutContext from '../../store/providers/resume'
import {TextareaElip, ButtonElip, InputElip} from '../../components/FormGroups'
import './ContactMe.scss'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const ContactMe = () => {
  const context = useContext(LayoutContext)
  const {user} = context
  const {habits} = user
  const schema = {
    yourName: {
      required: true,
      minLength: 3,
      maxLength: 120,
    },
    email: {
      required: true,
      email: true,
      maxLength: 120,
    },
    subject: {
      required: true,
      minLength: 3,
      maxLength: 120,
    },
    message: {
      required: true,
      minLength: 3,
      maxLength: 500,
    },
  }

  const [state, setState] = useState({
    openSnackbar: false,
    loading: false,
    severity: 'success',
    message: 'Send mail is successfully!',
  })
  const initalFormState = {
    values: null,
    isValid: true,
    touched: null,
    errors: {},
  }
  const [formState, setFormState] = useState(initalFormState)

  const checkValidity = (value, rules, name = null) => {
    if (!rules) return null
    let isValid = false
    // eslint-disable-next-line
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (rules?.required) {
      isValid = value.trim() === ''
      if (isValid) return `${name} is required`
    }

    if (rules.minLength !== undefined && rules.minLength) {
      isValid = value.length < rules.minLength
      if (isValid) return `${name} is min ${rules.minLength}`
    }

    if (rules.maxLength !== undefined && rules.maxLength) {
      isValid = value.length > rules.maxLength
      if (isValid) return `${name} is max ${rules.maxLength}`
    }

    if (rules.email) {
      const validEmail = regexEmail.test(String(value.trim()).toLowerCase())
      if (!validEmail) return `${name} is not email`
    }
  }

  const onChangeHandler = (event) => {
    event.preventDefault()
    const nameFormState = event.target.name
    const formValidation = {
      ...formState,
      errors: {
        ...formState.errors,
        [nameFormState]: checkValidity(event.target.value, schema[nameFormState], nameFormState),
      },
    }

    setFormState({
      ...formState,
      values: {
        ...formState.values,
        [nameFormState]: event.target.value.trim(),
      },
      touched: {
        ...formState.touched,
        [nameFormState]: true,
      },
      errors: formValidation.errors,
      isValid: !Object.keys(formValidation.errors).length > 0,
    })
  }

  const hasError = (key) => {
    if (!formState.errors || !formState.errors[key]) return null
    else return key in formState.errors ? true : false
  }

  const validationError = (key) => {
    if (!formState.errors || !formState.errors[key]) return null
    else return key in formState.errors ? formState.errors[key] : null
  }

  React.useEffect(() => {
    if (formState.errors) {
      const {errors} = formState
      for (let name in errors) {
        if (errors[name] === undefined) {
          delete errors[name]
          setFormState({
            ...formState,
            errors: errors || null,
          })
        }
      }
    }
  }, [formState])

  const sendEmail = (e) => {
    e.preventDefault()
    setState({
      ...state,
      loading: true,
    })
    axios
      .post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: process.env.REACT_APP_SERVICE_ID,
        template_id: process.env.REACT_APP_TEMPLATE_ID,
        user_id: process.env.REACT_APP_USER_ID,
        template_params: formState.values,
      })
      .then(() => {
        setState({
          ...state,
          loading: false,
          openSnackbar: true,
        })
        setFormState(initalFormState)
      })
      .catch(() => {
        setState({
          ...state,
          loading: false,
          openSnackbar: true,
          severity: 'error',
          message: 'Send mail is error!',
        })
      })
  }
  const contactInfoData = [
    {icon: PhoneInTalkOutlinedIcon, title: 'Phone', content: user.phone},
    {icon: EmailOutlinedIcon, title: 'Email', content: user.email},
    {icon: RoomOutlinedIcon, title: 'Address', content: user.address},
  ]

  const ContactInfoRender = contactInfoData.map((info) => <ContactInfo key={info.title} info={info} />)
  const habitsRender = habits.map((habit) => {
    const Icon = habit.icon
    return (
      <div key={habit.title} className="habits__item flex flex--column margin--16">
        <div className="habits__item--round text--center">
          <Icon classes={{root: 'color--softOrange'}} color="primary" />
          <Typography align="center">{habit.title}</Typography>
        </div>
      </div>
    )
  })

  const checkDisabled = () => {
    if (formState.values === null || Object.keys(formState.errors).length > 0) return true
    const names = ['yourName', 'email', 'subject', 'message']
    const isValids = names.map((item) => {
      if (formState.values[item] === undefined || formState.values[item] === '') return true
      return false
    })
    return isValids.includes(true)
  }

  return (
    <div id="Contact-Me" className="Contact page-section">
      <Container maxWidth="md">
        <Title>Get In Touch</Title>
        <Space height={30} />
        <div className="wrapper">
          <div className="flex-grow--1">
            <Grid container spacing={3}>
              <Grid item sm={12} md={4}>
                {ContactInfoRender}
              </Grid>
              <Grid item sm={12} md={8} className="Contact__form">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={6}>
                    <InputElip
                      option={{
                        className: 'full--width',
                        name: 'yourName',
                        required: true,
                        placeholder: 'Your Name',
                        onChange: onChangeHandler,
                      }}
                    />
                    <FormHelperText error={hasError('yourName')}>{validationError('yourName')}</FormHelperText>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <InputElip
                      option={{
                        className: 'full--width margin--bottom--6',
                        name: 'email',
                        required: true,
                        placeholder: 'Email address',
                        onChange: onChangeHandler,
                      }}
                    />
                    <FormHelperText error={hasError('email')}>{validationError('email')}</FormHelperText>
                  </Grid>
                </Grid>
                <InputElip
                  option={{
                    className: 'full--width margin--top--6 margin--bottom--6',
                    name: 'subject',
                    required: true,
                    placeholder: 'Subject',
                    onChange: onChangeHandler,
                  }}
                />
                <FormHelperText error={hasError('subject')}>{validationError('subject')}</FormHelperText>
                <TextareaElip
                  option={{
                    className: 'bg--inherit margin--top--6 margin--bottom--6',
                    name: 'message',
                    required: false,
                    placeholder: 'Message..',
                    onChange: onChangeHandler,
                  }}
                />
                <FormHelperText error={hasError('message')}>{validationError('message')}</FormHelperText>
                <div className="Contact__form--button">
                  <ButtonElip
                    option={{
                      color: 'primary',
                      onClick: sendEmail,
                      classes: {root: checkDisabled() ? '' : 'bg--white color--veryDarkDesaturatedBlue'},
                      disabled: checkDisabled(),
                    }}
                  >
                    Send Message
                  </ButtonElip>
                  {state.loading && <CircularProgress size={24} className="buttonProgress" />}
                </div>
              </Grid>
            </Grid>
          </div>
          <Space height={30} />
          <div className="habits text--center">{habitsRender}</div>
          <Space height={30} />
        </div>
      </Container>
      <Snackbar
        open={state.openSnackbar}
        onClose={() => setState({...state, openSnackbar: true})}
        className="MuiSnackbar"
      >
        <Alert onClose={() => setState({...state, openSnackbar: false})} severity={state.severity}>
          {state.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default ContactMe
