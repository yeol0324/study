<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo :todos="todos" />
    <AddTodo @add-todo="addTodo" />
    <!-- Todo에서 text 불러오는 법... -->
    <hr>
    <TodoList :todos="todos" @toggle-checkbox="toggleCheckbox" @click-delete="deleteTodo" />    
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import CompletedTodo from '@/components/CompletedTodo.vue';

export default {
  components: {
    TodoList,
    AddTodo,
    CompletedTodo
  },
  data() {
    return {
      todoText: '',
      todos: [
        { id: 1, text: 'learn vue', checked: false },
        { id: 2, text: 'play game', checked: false }
      ]
    }
  },
  methods: {
    addTodo(value) {
      this.todos.push({
        id: Math.random(),
        text: value,
        checked: false
      });
      this.todoText = '';
    },
    toggleCheckbox({id, checked}) {
      // 구조분해 {}를 통해 해당 값에 바로 접근 가능
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
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
  },  
}
</script>

<style>

</style>
