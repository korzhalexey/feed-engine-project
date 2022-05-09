export interface Photos {
  description: string
  name: string
  id: string
}

export interface TransferData {
  type: string
  fromColumnIndex: number
  fromPhotoIndex?: number
}

export interface Column {
  name: string
  photos: Photos[]
}

export interface Board {
  columns: Column[]
}

export interface RootState {
  board: Board
}

export enum MutationTypes {
  CREATE_COLUMN = 'CREATE_COLUMN',
  CREATE_PHOTO = 'CREATE_PHOTO',
  UPDATE_PHOTO = 'UPDATE_PHOTO',
  MOVE_PHOTO = 'MOVE_PHOTO',
  MOVE_COLUMN = 'MOVE_COLUMN'
}
