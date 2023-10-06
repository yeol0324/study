<template>
  <div>
      Complete: {{ numberOfCompletedTodo }}
  </div>
</template>

<script>
export default {
    computed: {
        //state를 불러올 때 : computed 에 작성, 데이터가 바뀔 때마다 업데이트가 돼서 최신값 유지 가능

        numberOfCompletedTodo() {
            return this.$store.getters['todo/numberOfCompletedTodo'];
        }
    }
}
</script>

<style>

</style>