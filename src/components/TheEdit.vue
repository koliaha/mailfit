<template>
  <div class="wrapper">
    <form class="form" @submit.prevent="onSub">
      <div class="form__group field">
        <input type="text" v-model="title"  class="form__field" autocomplete="off"  name="name" id="name" required />
        <label for="name" class="form__label">Редактирование</label>
      </div>
      <button type="submit" class="button">OK</button>
    </form>
  </div>
</template>
<script>
export default {
 props: ["editId"],
 name:"TheEdit",
  data() {
    return {
        id:this.editId.id,
      title: this.editId.title,
    };
  },
  methods: {
    onSub() {
      if (this.title.trim()) {
        const editedTodo = {
          id:this.id,
          title: this.title,
          complited: false
        };
        this.$emit("edit-todo", editedTodo);
        this.title = "";
      }
    }
  }
};
</script>
