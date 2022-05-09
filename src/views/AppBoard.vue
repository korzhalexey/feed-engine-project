<template>
  <div class="board">
    <div class="flex flex-row items-start">
      <BoardColumn
        v-for="(column, $columnIndex) of board.columns"
        :key="$columnIndex"
        :board="board"
        :column="column"
        :columnIndex="$columnIndex"
      />
      <div class="column flex">
        <input
          v-model="newColumnName"
          class="p-2 mr-2 flex-grow"
          placeholder="New Column Name"
          type="text"
          @keyup.enter="createColumn"
        />
      </div>
    </div>
    <div v-if="isPhotoOpen" class="photo-bg" @click.self="close">
      <router-view />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import BoardColumn from '../components/BoardColumn'

export default {
  components: { BoardColumn },
  data() {
    return {
      newColumnName: ''
    }
  },
  computed: {
    ...mapState({
      board: state => state.board
    }),
    isPhotoOpen() {
      return this.$route.name === 'photo'
    }
  },
  methods: {
    close() {
      this.$router.push({ name: 'board' })
    },

    createColumn() {
      this.$store.commit('CREATE_COLUMN', {
        name: this.newColumnName
      })

      this.newColumnName = ''
    }
  }
}
</script>
<style lang="css">
.board {
  @apply p-4 bg-teal-dark h-full overflow-auto;
}

.photo-bg {
  @apply pin absolute;
  background: rgba(0, 0, 0, 0.5);
}
</style>
