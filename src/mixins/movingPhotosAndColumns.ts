import { Board, Column, MutationTypes, TransferData } from '../types'
import { PropType, defineComponent } from 'vue'

export default defineComponent({
  props: {
    board: {
      type: Object as PropType<Board>,
      required: true
    },
    column: {
      type: Object as PropType<Column>,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    movePhotoOrColumn(transferData: TransferData): void {
      if (transferData.type === 'photo') {
        this.movePhoto(transferData)

        return
      }

      if (transferData.type === 'column') {
        this.moveColumn(transferData)
      }
    },

    moveColumn({ fromColumnIndex }: TransferData): void {
      this.$store.commit(MutationTypes.MOVE_COLUMN, {
        fromColumnIndex,
        toColumnIndex: this.columnIndex
      })
    },

    movePhoto({ fromColumnIndex, fromPhotoIndex }: TransferData): void {
      const fromPhotos = this.board.columns[fromColumnIndex].photos

      this.$store.commit(MutationTypes.MOVE_PHOTO, {
        fromPhotos,
        fromPhotoIndex,
        toPhotos: this.column.photos,
        toPhotoIndex: this.columnIndex
      })
    }
  }
})
