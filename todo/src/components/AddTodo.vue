<template>
  <input type="text" @keyup.enter="addTodo" v-model="todoText" class="w-100 p-2" placeholder="Type todo" />
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
            this.$emit('add-todo', e.target.value)
        }
    }
}
</script>

<style>

</style>