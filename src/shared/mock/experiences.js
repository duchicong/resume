import mock from '../../utils/mock'

mock.onGet('/api/experiences').reply(200, {
  data: [
    {
      key: 0,
      timeline: '',
      title: '',
      content: '',
      timelineDot: {
        color: 'inherit',
        variant: 'outlined',
      },
    },
    {
      key: 1,
      timeline: '2019 - Present',
      title: 'Connectiv Company',
      content: 'Web Developer Frontend use (React)',
      timelineDot: {
        color: 'inherit',
        variant: 'outlined',
      },
    },
    {
      key: 2,
      timeline: '2018 - 2019',
      title: 'BAKP Education',
      content: 'Fullstack PHP Programs Courses',
      timelineDot: {
        color: 'inherit',
        variant: 'outlined',
      },
    },
    {
      key: 3,
      timeline: '2015 - 2016',
      title: 'Vinamax VietNam Company',
      content: 'Fullstack Web Developer with NukeViet',
      timelineDot: {
        color: 'inherit',
        variant: 'outlined',
      },
    },
    {
      key: 4,
      timeline: '2012 - 2015',
      title: 'HaNoi Institute of Technology',
      content: "Get a good bachelor's degree",
      timelineDot: {
        color: 'inherit',
        variant: 'outlined',
      },
    },
  ],
})
