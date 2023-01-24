<template>
    <div>
        <h1 class="title_text">Список заметок</h1>
        <div v-for="(i, index) in todoList" :key="index">
            <NoteItem :data-item="i" />
        </div>
    </div>
</template>
<script>
import NoteItem from '@/components/NoteItem.vue'
export default {
    name: "NoteList",
    components: { NoteItem },
    computed: {
        todoList() {
            return this.$store.getters.getNoteList
        },
    },
}
</script>
<style lang="scss">

</style>