import mock from '../../utils/mock'

mock.onGet('/api/languages').reply(200, {
  data: [
    {
      language: 'Javascript',
      progress: {
        value: 80,
        variant: 'determinate',
        classes: {
          bar: 'bg--moderateRed',
        },
      },
    },
    {
      language: 'PHP',
      progress: {
        value: 40,
        variant: 'determinate',
        classes: {
          bar: 'bg--softOrange',
        },
      },
    },
    {
      language: 'CSS/SCSS',
      progress: {
        value: 80,
        variant: 'determinate',
        classes: {
          bar: 'bg--moderateRed',
        },
      },
    },
    {
      language: 'Vue/Nuxt',
      progress: {
        value: 60,
        variant: 'determinate',
        classes: {
          bar: 'bg--softOrange',
        },
      },
    },
    {
      language: 'Markdown',
      progress: {
        value: 80,
        variant: 'determinate',
        classes: {
          bar: 'bg--moderateRed',
        },
      },
    },
    {
      language: 'HTML',
      progress: {
        value: 80,
        variant: 'determinate',
        classes: {
          bar: 'bg--softOrange',
        },
      },
    },
    {
      language: 'Typescript',
      progress: {
        value: 50,
        variant: 'determinate',
        classes: {
          bar: 'bg--softOrange',
        },
      },
    },
    {
      language: 'Git',
      progress: {
        value: 70,
        variant: 'determinate',
        classes: {
          bar: 'bg--softOrange',
        },
      },
    },
    {
      language: 'Other...',
      progress: {
        value: 50,
        variant: 'determinate',
        classes: {
          bar: 'bg--softOrange',
        },
      },
    },
  ],
})
