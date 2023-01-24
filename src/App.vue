<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/sticker.svg" />
    <router-view />
    <h1 class="title_text">Список задач</h1>
    <div class="wrapper">
      <AddForm @add-todo="addTodo" />
      
      <Edit v-if="editing" @edit-todo="editedTodo" :editId="editId" />
      <Loading v-else-if="loading" />
      <TodoList v-else-if="todoList.length" :todos="todoList" @remove-todo="removeTodo" @edit-todo="editTodo" />
      <p class="title_text" v-else>Задачи отсутсвуют</p>
    </div>
  </div>
</template>
<script>
import TodoList from "./components/TodoList";
import AddForm from "./components/AddForm";
import Loading from "./components/TheLoading.vue";
import Edit from "./components/TheEdit.vue";
export default {
  name: "App",
  data() {
    return {
      loading: false,
      filter: "all",
      editId: null,
      editing: false
    };
  },
  mounted() { },
  components: {
    TodoList,
    AddForm,
    Loading,
    Edit
  },

  computed: {
    todoList(){
      return this.$store.getters.getTodos
    },
   
  },
  methods: {
    removeTodo(id) {
      let todo = this.todoList.filter(el => el.id != id);
      this.todoList = todo;
      this.loading = false;
    },
    editTodo(id) {
      console.log(id);
      this.editing = true;
      this.editId = this.todos.find(el => el.id == id);
    },
    editedTodo(eT) {
      const id = eT.id;
      this.todos.map(el => {
        if (el.id == id) {
          el.title = eT.title;
        }
      });
      this.editing = false;
    },
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
    searchField() {
      console.log(this.search);
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(34, 193, 195);
  background: linear-gradient(0deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(167, 45, 253, 1) 100%);
  min-height: 100vh;
  box-sizing: border-box;
}

.wrapper {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  width: 150px;
}

.title_text {
  color: #fff;
  text-transform: uppercase;
  font-size: 35px;
  border-radius: 10px;
}



@media screen and (max-width: 450px) {
  .wrapper {
    max-width: 95%;
  }


}
</style>
