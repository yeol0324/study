import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  // actions 에서 서버에 비동기로 데이터베이스를 업데이트, 완료 후 mutations을 통해 data 업테이트
  state: {
    // data
    todos: [
      { id: 1, text: "learn vue", checked: false },
      { id: 2, text: "play game", checked: false },
    ],
    users: [],
  },
  mutations: {
    // 실질적으로 data를 바꿈
    ADD_TODO(state, value) {
      state.todos.push({
        id: Math.random(),
        text: value,
        checked: false,
      });
    },
    TOGGLE_TODO(state, { id, checked }) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === id;
      });
      state.todos[index].checked = checked;
    },
    DELETE_TODO(state, todoId) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === todoId;
      });
      state.todos.splice(index, 1);
    },
    SET_USERS(state, users) {
      state.users = users;
    },
  },
  actions: {
    // 함수, 비동기적인 일 처리 > matations 한테 data 바꿔달라고 요청 (methods 와 비슷)
    //actions를 사용할 땐 dispatch를 사용
    // addTodo(context, value) {
    // }
    addTodo({ commit }, value) {
      //여기에 비동기 작업
      setTimeout(function () {
        commit("ADD_TODO", value);
      }, 500);
    },
    toggleTodo({ commit }, payload) {
      setTimeout(function () {
        commit("ADD_TODO", payload);
      }, 500);
    },
    deleteTodo({ commit }, todoId) {
      setTimeout(function () {
        commit("DELETE_TODO", todoId);
      }, 500);
    },
    getUsers({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/users").then( res => {
        commit("SET_USERS", res.data);
      });
    },
  },
  getters: {
    //computed와 비슷
  },
});
