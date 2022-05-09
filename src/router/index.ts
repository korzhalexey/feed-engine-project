import { createRouter, createWebHistory } from 'vue-router'
import Board from '@/views/AppBoard.vue'
import Photo from '@/views/Photo.vue'

const routes = [
  {
    path: '/',
    name: 'board',
    component: Board,
    children: [
      {
        path: 'photo/:id',
        name: 'photo',
        component: Photo
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
