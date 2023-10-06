<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo />
    <AddTodo />
    <hr />
    <TodoList />
    {{ numberOfCompletedTodo }}
    <UserList />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import CompletedTodo from '@/components/CompletedTodo.vue';
import UserList from '@/components/UserList.vue';

export default {
  name: 'App',
  components: {
    TodoList,
    AddTodo,
    CompletedTodo,
    UserList
  },
  computed: {
    numberOfCompletedTodo() {
      return this.$store.getters.numberOfCompletedTodo;
      //getters 를 사용해서 계산된 값을 바로 불러올 수 있음!
    }
  }
}
</script>
