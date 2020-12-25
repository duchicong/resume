import mock from '../../utils/mock'

mock.onGet('/api/projects').reply(200, {
  data: [
    {
      id: 1,
      type: 'project',
      title: 'Project Management Laws Documents',
      image: '/images/recent-works/laws.jpg',
      body:
        'Laws is a law project that aims to administer documents and documents for lawyers before and after going to court.',

      technical: 'Project using Laravel, Nuxtjs and AWS.',
      due_date: '3 months',
      positions: ['Backend', 'Front-end'],
      source: null,
    },
    {
      id: 2,
      type: 'project',
      title: 'Project Management Restaurants',
      image: '/images/recent-works/restaurants.jpg',
      body:
        'Restaurants are the management of chain stores and restaurants. in his roles as the manager and distributor operating the stores',
      technical: 'Project using Laravel, Vuejs and AWS.',
      due_date: '3 months',
      positions: ['Backend', 'Front-end'],
      source: null,
    },
    {
      id: 3,
      type: 'project',
      title: 'Project Management Foods',
      image: '/images/recent-works/foods.jpg',
      body:
        'Fooder is a travel project that allows users to find and choose dishes that suit each taste, ensuring food safety factor for tourists coming to Japan. The project allows to link the chain of managed stores directly on the map, the user can choose, then it will direct customers to the store.',
      technical: 'Project using Laravel, Reactjs and AWS, Rest API Google Maps.',
      due_date: '1 year',
      positions: ['Front-end'],
      source: null,
    },
    {
      id: 4,
      type: 'project',
      title: 'Project Recruitment',
      image: '/images/recent-works/Recruitment-transparent.png',
      body:
        'is a recruitment project that can communicate with companies through chatbot, they can exchange information, salary, qualifications, set interview schedules ...',
      technical: 'Project using Laravel, Reactjs and AWS, socket.',
      due_date: '4 months',
      positions: ['Front-end'],
      source: null,
    },
    {
      id: 5,
      type: 'example',
      title: 'Burger Builder',
      image: '/images/recent-works/bugger.jpg',
      body: 'Practice projects from a Reactjs course allowing users to create orders and pay.',
      technical: 'Reactjs',
      due_date: '3 months',
      positions: ['Front-end'],
      source: {
        link: 'https://github.com/Iamcong/burger-builder-react',
        name: 'github.com',
      },
    },
    {
      id: 6,
      type: 'example',
      title: 'React-interactable snap points',
      image: '/images/recent-works/interactable-snap-points.png',
      body: 'drag and drop from point to point on the web just like swiping on mobile',
      technical: 'Reactjs, package: react-interactable/noNative',
      due_date: '2 days',
      positions: ['Front-end'],
      source: {
        link: 'https://codesandbox.io/s/react-interactable-snap-points-y6kmo',
        name: 'codesanbox.io',
      },
    },
    {
      id: 7,
      type: 'example',
      title: 'Custom Pagination with Multiple Slide',
      image: '/images/recent-works/Custom-Pagination.png',
      body: '',
      technical: 'Reactjs, package: react-id-swiper',
      due_date: '1 days',
      positions: ['Front-end'],
      source: {
        link: 'https://codesandbox.io/s/custom-pagination-with-multiple-slide-nrc61',
        name: 'codesanbox.io',
      },
    },
  ],
})
