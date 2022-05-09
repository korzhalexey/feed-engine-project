<template>
  <div class="photo-view">
    <div class="flex flex-col flex-grow items-start justify-between px-4">
      <img :src="photo.name" alt="image" />
      <textarea
        :value="photo.description"
        class="relative w-full bg-green-light px-2 mt-2 h-64 rounded-lg leading-normal focus:outline-none"
        @change="updatePhotoProperty($event, 'description')"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getPhoto']),
    photo() {
      console.log(this.getPhoto(this.$route.params.id))
      return this.getPhoto(this.$route.params.id)
    }
  },
  methods: {
    updatePhotoProperty(event, key) {
      this.$store.commit('UPDATE_PHOTO', {
        photo: this.photo,
        key,
        value: event.target.value
      })
    }
  }
}
</script>
<style>
.photo-view {
  @apply relative flex flex-row bg-green-darker pin mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 700px;
}
</style>
