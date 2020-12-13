import React, {useState, useEffect} from 'react'
import {Container, Typography} from '@material-ui/core'
import {Title, Space} from '../../components'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@material-ui/lab'
import './Experience.scss'
import axios from '../../utils/axios'

const Experience = () => {
  const [experiences, setExperiences] = useState()

  useEffect(() => {
    let mounted = true

    const fetchData = () => {
      axios.get('/api/experiences').then((res) => {
        setExperiences(res.data.data)
      })
    }

    if (mounted) fetchData()

    return () => {
      mounted = false
    }
  }, [])

  if (!experiences) return null
  const listExperiencesRendering =
    experiences.length > 0 &&
    experiences.map((experience) => {
      return (
        <TimelineItem key={experience.key}>
          <TimelineOppositeContent>
            <Typography className="Roboto-Black color--softOrange">{experience.timeline}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot {...experience.timelineDot} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className="Roboto-Black color--white">{experience.title}</Typography>
            <Typography className="color--white">{experience.content}</Typography>
          </TimelineContent>
        </TimelineItem>
      )
    })
  return (
    <div id="Experience" className="Experience page-section">
      <Container maxWidth="md">
        <Title>Experience</Title>
        <Space height={30} />
        <div className="content">
          <div className="wrapper">
            <div className="rounded">
              <Timeline align="alternate">{listExperiencesRendering}</Timeline>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Experience
