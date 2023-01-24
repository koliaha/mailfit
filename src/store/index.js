import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    noteList: [
      {
        id: 1,
        title: "Home Work",
        list: [
          { id: 11, title: "Do math", complited: false },
          { id: 12, title: "Play PS5", complited: false },
        ],
      },
      {
        id: 2,
        title: "Sport",
        list: [
          { id: 11, title: "Aikido", complited: false },
          { id: 12, title: "Box", complited: false },
        ],
      },
    ],
    todos: [
      { id: 1, title: "Купить хлеб", complited: false },
      { id: 2, title: "Купить PS5", complited: false },
    ],
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    getNoteList(state) {
      return state.noteList;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
