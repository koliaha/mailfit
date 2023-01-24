<template>
  <div class="wrapper">
    <form class="form" @submit.prevent="onSub">
      <div class="form__group field">
        <input
          type="text"
          v-model="title"
          class="form__field"
          autocomplete="off"
          name="name"
          id="name"
          required
        />
        <label for="name" class="form__label">Название</label>
      </div>
      <button type="submit" class="button">+</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSub() {
      
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
        
          complited: false
        };
        this.$emit("add-todo", newTodo);
        this.title = "";
      }
    }
  }
};
</script>
<style  lang='scss' >
$primary: #11998e;
$secondary: #38ef7d;
$white: #fff;
$gray: #9b9b9b;
.wrapper {
  width: 100%;
}
.form {
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
}
.form__group {
  position: relative;
  padding: 15px 0 0;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  color: $white;
  padding: 7px 0;
  background: transparent;
  transition: 0.5s;
  color: #000;
  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: $gray;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $primary;
    font-weight: 700;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary, $secondary);
  border-image-slice: 1;
}
/* reset input */
.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}
.button {
  border: none;
  color: $primary;
  cursor: pointer;
  font-size: 25px;
  line-height: 50px;
  text-align: center;
  margin: 5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  outline: none;
  transition: background 0.4s;
  &:hover {
    color: #fff;
    background: linear-gradient(to right, $primary, $secondary);
  }
}

@media screen  and (max-width: 450px){
  .wrapper  .form {
      flex-direction: column;
      height: auto;
      padding: 15px 15px;
  }
  .form__group{
    margin: 10px;
    width: 100%;
  }

 
}
</style>