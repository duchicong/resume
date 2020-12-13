import React, {useEffect, useState} from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import {Container, Tabs, Tab, Box, Grid} from '@material-ui/core'
import {Title, Space} from '../../components'
import Post from './Post'
import DialogPost from './DialogPost'
import axios from '../../utils/axios'

function TabPanel(props) {
  const {children, value, index, ...other} = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    height: 'auto',
  },
  MuiTab: {
    fontSize: 18,
  },
}))

export default function RecentWork() {
  const tabs = ['Everything', 'Recent Works', 'Examples']
  const classes = useStyles()
  const [state, setState] = useState({
    open: false,
    value: 0,
  })
  const [projects, setProjects] = useState()

  const handleChange = (event, value) => {
    setState({
      ...state,
      value,
    })
  }

  const onOpenHandler = (newState) => () => {
    setState({
      ...state,
      ...newState,
      open: true,
    })
  }

  const onCloseHandler = () => {
    setState({
      ...state,
      open: false,
    })
  }

  useEffect(() => {
    let mounted = true

    const fetchData = () => {
      axios.get('/api/projects').then((res) => {
        setProjects(res.data.data)
      })
    }

    if (mounted) fetchData()

    return () => {
      mounted = false
    }
  }, [])

  const works = []
  const examples = []
  projects &&
    projects.map((project) => {
      if (project.type === 'project') works.push(project)
      if (project.type === 'example') examples.push(project)
      return null
    })

  const listTabsRender = tabs.map((tab) => (
    <Tab
      key={tab}
      label={tab}
      classes={{wrapper: clsx(classes.MuiTab, 'color--white text--bold text--capitalize')}}
      {...a11yProps(0)}
    />
  ))
  const listProjectsRender =
    projects &&
    projects.map((project) => (
      <Grid key={project.id} item xs={12} sm={6} md={4}>
        <Post onOpen={onOpenHandler(project)} {...project} />
      </Grid>
    ))
  const listWorks =
    works.length > 0 &&
    works.map((project) => (
      <Grid key={project.id} item xs={12} sm={6} md={4}>
        <Post onOpen={onOpenHandler(project)} {...project} />
      </Grid>
    ))
  const listExamples =
    examples.length > 0 &&
    examples.map((project) => (
      <Grid key={project.id} item xs={12} sm={6} md={4}>
        <Post onOpen={onOpenHandler(project)} {...project} />
      </Grid>
    ))

  return (
    <div id="Recent-Works" className={clsx('Recent-Works page-section', classes.root)}>
      <Container maxWidth="md">
        <Space height={30} />
        <Title>Recent Works</Title>
        <Space height={30} />
        <Tabs
          value={state.value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          classes={{indicator: 'bg--softOrange'}}
        >
          {listTabsRender}
        </Tabs>
        <TabPanel value={state.value} index={0}>
          <Grid container spacing={3}>
            {listProjectsRender}
          </Grid>
        </TabPanel>
        <TabPanel value={state.value} index={1}>
          <Grid container spacing={3}>
            {listWorks}
          </Grid>
        </TabPanel>
        <TabPanel value={state.value} index={2}>
          <Grid container spacing={3}>
            {listExamples}
          </Grid>
        </TabPanel>
      </Container>
      <DialogPost onClose={onCloseHandler} {...state} />
    </div>
  )
}
