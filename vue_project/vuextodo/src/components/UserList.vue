<template>
  <div>
    User List
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex';
export default {
  
  created() {
    this.getUsers();
  },
  computed: {
    ...mapState('user', ['users']),
    // users 가 아닌 다른 이름으로 가져오고 싶다면 ex_({pelple: 'users'})로 입력 가능
    // users: state => state.user.users ( modules 시)
    // 아래에 잇는 것을 위에처럼 map 헬퍼를 사용해서 간단하게 작성 가능
    // users() {
    //   return this.$store.state.users;
    // },
  },
  methods: {
    ...mapActions('user', ['getUsers'])
    // getUsers() {      
    //   this.$store.dispatch("getUsers");
    // },
  },
};
</script>

<style>
</style>