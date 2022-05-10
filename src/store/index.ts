import { createStore } from 'vuex'
import defaultBoard from '../default-board'
import { saveStatePlugin, uuid } from '../utils'

const storageBoard = localStorage.getItem('board')
const board = storageBoard ? JSON.parse(storageBoard) : defaultBoard

export default createStore({
  plugins: [saveStatePlugin],
  state: {
    board
  },
  getters: {
    getPhoto(state) {
      return (id: string): undefined => {
        for (const column of state.board.columns) {
          for (const photo of column.photos) {
            if (photo.id === id) {
              return photo
            }
          }
        }
      }
    }
  },
  mutations: {
    CREATE_COLUMN(state, { name }) {
      state.board.columns.push({
        name,
        photos: []
      })
    },
    CREATE_PHOTO(state, { photos, name }) {
      photos.push({
        name,
        id: uuid(),
        description: ''
      })
    },

    UPDATE_PHOTO(state, { photo, key, value }) {
      photo[key] = value
    },

    MOVE_PHOTO(state, { fromPhotos, toPhotos, fromPhotoIndex, toPhotoIndex }) {
      const photoToMove = fromPhotos.splice(fromPhotoIndex, 1)[0]

      toPhotos.splice(toPhotoIndex, 0, photoToMove)
    },

    MOVE_COLUMN(state, { fromColumnIndex, toColumnIndex }) {
      const { columns } = state.board
      const columnToMove = columns.splice(fromColumnIndex, 1)[0]

      columns.splice(toColumnIndex, 0, columnToMove)
    }
  }
})
