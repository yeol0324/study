import Vue from 'vue';
import Vuex from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    // actions 에서 서버에 비동기로 데이터베이스를 업데이트, 완료 후 matations을 통해 data 업테이트
    state: {
        // data

    },
    matations: {
        // 실질적으로 data를 바꿈
    },
    actions: {
        // 함수, 비동기적인 일 처리 > matations 한테 data 바꿔달라고 요청 (methods 와 비슷)

    },
    getters: {
        //computed와 비슷
    }
})