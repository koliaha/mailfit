<template>
    <div class="noteitem">
        <h2 class="noteitem-title">{{ dataItem.title }}</h2>
        <TodoItem v-for="todo of dataItem.list" :todo="todo" :key="todo.id" @remove-todo="removeTodo" @edit-todo="editTodo"/>
    </div>
</template>
<script>
import TodoItem from "./TodoItem";

export default {
    name: "NoteItem",
    props: ["dataItem"],
    components: { TodoItem },
    computed: {
        todoList() {
            return this.$store.getters.getNoteList
        },
    },
    methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    },
     editTodo(id) {
      this.$emit("edit-todo", id);
    }
  }
}
</script>
<style lang="scss">
.noteitem {
    padding: 20px;
    margin: 20px;
    background-color: rgb(255, 222, 222);
    border-radius: 10px;
    &-title{
        text-transform: uppercase;
    }
}
</style>