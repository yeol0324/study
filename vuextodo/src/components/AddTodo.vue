<template>
  <input type="text" class="w-100 p-2" placeholder="type todo" @keyup.enter="addTodo">
</template>

<script>
export default {
    data() {
        return {
        
        }
    },
    methods: {
        addTodo(e) {
            this.$emit('add-todo', e.target.value);
        }
    }
}
</script>

<style>

</style>