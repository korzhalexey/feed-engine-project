<template>
  <button :class="typeClasses" class="button" type="button">
    <slot />
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String
    }
  },
  computed: {
    typeClasses(): string {
      switch (this.type) {
        case 'danger':
          return 'bg-red'
        default:
          return 'bg-teal'
      }
    }
  }
})
</script>

<style lang="css" scoped>
.button {
  @apply inline-flex px-4 py-2 text-white font-bold rounded items-center;
}
</style>
