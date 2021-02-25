<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo />
    <AddTodo @add-todo="addTodo" v-model="todoText" />
    <hr />
    <TodoList @toggle-checkbox="toggleCheckbox" @click-delete="deleteTodo" />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import CompletedTodo from '@/components/CompletedTodo.vue';

export default {
  name: 'App',
  components: {
    TodoList,
    AddTodo,
    CompletedTodo
  },
  data() {
    return {
      // todos: [
      //   { id: 1, text: 'play game', checked: false },
      //   { id: 2, text: 'go to bed', checked: false }
      // ],
      todoText: ''
    }    
  },
  methods: {
    addTodo(value) {
      this.todos.push({
        id: Math.random(),
        text: value,
        checked: false
      })
    },
    toggleCheckbox({id, checked}) {
      const index = this.todos.findIndex(todo => {
        return todo.id ===id;
      });
      this.todos[index].checked = checked;
    },
    deleteTodo(id) {
      // const index = this.todos.findIndex(todo => {
      //   return todo.id === id;
      // });
      // this.todos.splice(index, 1);
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
}
</script>
