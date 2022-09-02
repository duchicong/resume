import mock from '../../utils/mock'

mock.onGet('/api/languages').reply(200, {
  data: [
    {
      language: 'Typescript',
      progress: {
        value: 90,
        variant: 'determinate',
        classes: {
          bar: 'bg--moderateRed',
        },
      },
    },
    {
      language: 'Javascript',
      progress: {
        value: 90,
        variant: 'determinate',
        classes: {
          bar: 'bg--moderateRed',
        },
      },
    },
    {
      language: 'PHP',
      progress: {
        value: 20,
        variant: 'determinate',
        classes: {
          bar: 'bg--softOrange',
        },
      },
    },
    {
      language: 'CSS/SCSS',
      progress: {
        value: 90,
        variant: 'determinate',
        classes: {
          bar: 'bg--moderateRed',
        },
      },
    },
    {
      language: 'Vue/Nuxt',
      progress: {
        value: 40,
        variant: 'determinate',
        classes: {
          bar: 'bg--softOrange',
        },
      },
    },
    {
      language: 'React',
      progress: {
        value: 80,
        variant: 'determinate',
        classes: {
          bar: 'bg--moderateRed',
        },
      },
    },
    {
      language: 'Markdown',
      progress: {
        value: 100,
        variant: 'determinate',
        classes: {
          bar: 'bg--moderateRed',
        },
      },
    },
    {
      language: 'HTML',
      progress: {
        value: 100,
        variant: 'determinate',
        classes: {
          bar: 'bg--moderateRed',
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
      language: 'Jekyll',
      progress: {
        value: 60,
        variant: 'determinate',
        classes: {
          bar: 'bg--softOrange',
        },
      },
    },
    {
      language: 'Other...',
      progress: {
        value: 30,
        variant: 'determinate',
        classes: {
          bar: 'bg--softOrange',
        },
      },
    },
  ],
})
