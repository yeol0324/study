<template>
  <div id="app" class="container">
    <h1>Todo App</h1>
    <input type="text" placeholder="text">
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data() {
    todos: [
      { id: 1, text: 'play game', checked: false },
      { id: 2, text: 'go to bed', checked: false }
    ]
  }
}
</script>
