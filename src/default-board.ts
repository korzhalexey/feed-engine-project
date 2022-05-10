import { uuid } from './utils'

export default {
  name: 'workshop',
  columns: [
    {
      name: 'third album',
      photos: [
        {
          description: '',
          name: require('@/assets/img1.jpg'),
          id: uuid()
        },
        {
          description: '',
          name: require('@/assets/img2.jpg'),
          id: uuid()
        },
        {
          description: '',
          name: require('@/assets/img3.jpg'),
          id: uuid()
        }
      ]
    },
    {
      name: 'second album',
      photos: [
        {
          description: 'description',
          name: require('@/assets/img2.jpg'),
          id: uuid()
        }
      ]
    },
    {
      name: 'first album',
      photos: [
        {
          description: '',
          name: require('@/assets/img3.jpg'),
          id: uuid()
        }
      ]
    }
  ]
}
