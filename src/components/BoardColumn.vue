<template>
  <AppDrop @drop="movePhotoOrColumn">
    <AppDrag
      :transfer-data="{ type: 'column', fromColumnIndex: columnIndex }"
      class="column"
    >
      <div class="flex items-center mb-2 font-bold">{{ column.name }}</div>
      <div class="list-reset">
        <ColumnPhoto
          v-for="(photo, $photoIndex) of column.photos"
          :key="$photoIndex"
          :board="board"
          :column="column"
          :columnIndex="columnIndex"
          :photo="photo"
          :photoIndex="$photoIndex"
        />
        <input
          class="bg-blue hover:bg-blue-dark text-transparent font-bold py-2 px-4 rounded"
          title=" "
          type="file"
          @change="createPhoto($event, column.photos)"
        />
      </div>
    </AppDrag>
  </AppDrop>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Photos, MutationTypes } from '@/types'
import ColumnPhoto from './ColumnPhoto.vue'
import AppDrag from './AppDrag.vue'
import AppDrop from './AppDrop.vue'
import movingPhotosAndColumns from '../mixins/movingPhotosAndColumns'

export default defineComponent({
  name: 'BoardColumn',
  components: {
    AppDrag,
    AppDrop,
    ColumnPhoto
  },
  data() {
    return {
      uploadedPhoto: new Blob()
    }
  },
  mixins: [movingPhotosAndColumns],
  methods: {
    createPhoto(event: Event, photos: Photos[]) {
      const reader = new FileReader()
      const target = event.target as HTMLInputElement
      this.uploadedPhoto = target.files![0]

      reader.readAsDataURL(this.uploadedPhoto)
      reader.onload = (e: Event) => {
        const target = e.target as HTMLTextAreaElement

        this.$store.commit(MutationTypes.CREATE_PHOTO, {
          photos,
          name: reader.result
        })

        target.value = ''
      }
    }
  }
})
</script>
<style>
input[type='file']::file-selector-button {
  @apply border-none bg-transparent text-white;
}

.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}
</style>
