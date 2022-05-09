<template>
  <AppDrop @drop="movePhotoOrColumn">
    <AppDrag
      :transferData="{
        type: 'photo',
        fromColumnIndex: columnIndex,
        fromPhotoIndex: photoIndex
      }"
      class="photo"
      @click="goToPhoto(photo)"
    >
      <img class="pointer-events-none" :src="photo.name" alt="image" />
      <p v-if="photo.description" class="w-full flex-no-shrink mt-1 text-sm">
        {{ photo.description }}
      </p>
    </AppDrag>
  </AppDrop>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import movingPhotosAndColumns from '../mixins/movingPhotosAndColumns'
import AppDrag from './AppDrag.vue'
import AppDrop from './AppDrop.vue'
import { Photos } from '@/types'

export default defineComponent({
  name: 'ColumnPhoto',
  components: {
    AppDrop,
    AppDrag
  },
  props: {
    photo: {
      type: Object as PropType<Photos>,
      required: true
    },
    photoIndex: {
      type: Number,
      required: true
    }
  },
  mixins: [movingPhotosAndColumns],
  methods: {
    goToPhoto(photo: Photos) {
      this.$router.push({
        name: 'photo',
        params: { id: photo.id }
      })
    }
  }
})
</script>

<style scoped>
.photo {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white;
  @apply text-grey-darkest no-underline;
}
</style>
