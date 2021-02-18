import React, {useEffect, useState, useContext} from 'react'
import {Container, Grid, Typography, Button} from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp'
import LayoutContext from '../../store/providers/resume'
import {Title, Space, ProgressSkills} from '../../components'
import './AboutMe.scss'
import axios from '../../utils/axios'

const AboutMe = () => {
  const context = useContext(LayoutContext)
  const {user} = context
  const {workSkills} = user
  const [languages, setLanguages] = useState()

  useEffect(() => {
    let mounted = true

    const fetchLanguages = () => {
      axios.get('/api/languages').then((res) => setLanguages(res.data.data))
    }

    if (mounted) fetchLanguages()

    return () => {
      mounted = false
    }
  }, [])

  if (!languages) return null

  const languagesRendering =
    languages.length > 0 &&
    languages.map((language) => {
      return (
        <Grid item xs={6} md={4} key={language.language}>
          <ProgressSkills title={language?.language} progress={language?.progress} />
        </Grid>
      )
    })

  const listSkills =
    workSkills &&
    workSkills.length > 0 &&
    workSkills.map((skill) => {
      const Icon = skill.icon
      return (
        <div key={skill.name} className="flex--column text--center work-skills__item">
          <Icon fontSize="large" classes={{root: 'color--softOrange'}} />
          <Typography align="center" classes={{root: 'color--white'}}>
            {skill.name}
          </Typography>
          <Typography align="center" classes={{root: 'color--white work-skills__item--description'}}>
            {skill.description}
          </Typography>
        </div>
      )
    })
  return (
    <div id="About-Me" className="page-section">
      <Container maxWidth="md">
        <Title>About Me</Title>
        <Space height={30} />
        <div className="content">
          <div className="wrapper">
            <div className="rounded">
              <Typography align="justify" className="color--white">
                {user.description}
              </Typography>
              <div className="flex-grow--1 margin--top--30">
                <Grid container spacing={3}>
                  <Grid item md={12} sm={12} xs={12} className="triangle-left-md">
                    <div className="rounded padding--12">
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Grid container spacing={3}>
                            {languagesRendering}
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
            <div className="flex-grow--1 margin--top--30">
              <Grid container spacing={3} className="work-skills">
                {listSkills}
              </Grid>
            </div>
            <div className="clear-both block text--center">
              <Space height={30} />
              <Button
                classes={{
                  root: 'Dowload-CV Roboto-Black',
                  colorInherit: 'bg--moderateRed color--white',
                }}
                color="inherit"
                variant="contained"
                href="/docs/Du-Chi-Cong-resume.pdf"
                target="_blank"
                rel="noopener"
                startIcon={<GetAppIcon />}
                download
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AboutMe
