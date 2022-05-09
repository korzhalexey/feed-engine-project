<template>
  <div @drop.stop="onDrop" @dragover.prevent @dragenter.prevent>
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppDrop',
  methods: {
    onDrop({ dataTransfer }: DragEvent) {
      const transferData = JSON.parse(dataTransfer!.getData('payload'))
      this.$emit('drop', transferData)
    }
  }
})
</script>

<style scoped></style>
