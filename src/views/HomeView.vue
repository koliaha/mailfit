<template>
  <div class="home">
    <NoteList />
  </div>
</template>

<script>
import NoteList from '@/components/NoteList.vue'

export default {
  name: 'HomeView',
  components: {
    NoteList
  }
}
</script>
