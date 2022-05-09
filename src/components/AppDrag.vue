<template>
  <div
    :draggable="true"
    @dragstart.self="onDrag"
    @dragover.prevent
    @dragenter.prevent
    @click="$emit('click')"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TransferData } from '@/types'

export default defineComponent({
  name: 'AppDrag',

  props: {
    transferData: {
      type: Object as PropType<TransferData>,
      required: true
    }
  },

  methods: {
    onDrag({ dataTransfer }: DragEvent) {
      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move'
        dataTransfer.dropEffect = 'move'
        dataTransfer.setData('payload', JSON.stringify(this.transferData))
      }
    }
  }
})
</script>
<style scoped></style>
