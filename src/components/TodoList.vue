<template>
  <div class="wrapper">
    <ul class="listStyle">
      <TodoItem v-for="todo of todos" :todo="todo" :key="todo.id" @remove-todo="removeTodo" @edit-todo="editTodo"/>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  props: ["todos"],
  components: {
    TodoItem
  },
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    },
     editTodo(id) {
      this.$emit("edit-todo", id);
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
ul{
  padding: 0;
}
.wrapper {
  width: 100%;
}
.listStyle {
  list-style: none;
  width: 100%;
}
</style>