<template>
  <input type="text" v-model="todoText" class="w-100 p-2" placeholder="type todo" @keyup.enter="addTodo">
</template>

<script>
export default {
    data() {
        return {
            todoText: ''
        }
    },
    methods: {
        addTodo(e) {
            this.$store.commit('ADD_TODO', e.target.value);
            this.todoText = '';
            //this.$emit('add-todo', e.target.value);
        }
    }
}
</script>

<style>

</style>