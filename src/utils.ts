import { RootState } from './types'

export const uuid = () =>
  Math.random()
    .toString(16)
    .slice(2)

export const saveStatePlugin = (store: any): void => {
  store.subscribe((state: RootState) => {
    try {
      localStorage.setItem('board', JSON.stringify(state.board))
    } catch (e) {
      console.log(e)
    }
  })
}
