<template>
    <div>
        <h1>{{resault}}</h1>
        <form @submit.prevent="onSubmitForm">
            <!-- v-on: 은 @로 대체 가능 -->
            <!-- prevent.default 대신 .prevent로 사용 가능 -->
            <input ref="answer" maxlength="4" minlength="4" v-model="value" />
            <button type="submit">입력</button>
        </form>
        <div>시도: {{tries.length}}</div>
        <ul>
            <li v-for="t in tries" :key="t.try">
                <div>{{t.try}}</div>
                <div>{{t.resault}}</div>
            </li>
            <!-- v가 붙으면 vue 제어, ""안의 글은 javascript 문이기때문에 예약어나 자바스크립트 어 쓸 수 없음 ex) try, for, if 등 -->
        </ul>
    </div>
</template>

<script>
const getNUmbers = () => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
};

export default {
    data() {
        return { 
            answer: getNUmbers(), //ex [1, 2, 4, 8] 배열이기때문에 비교할 때 join함수 꼭 필요함
            tries: [], // 시도 수
            value: '', // 입력
            resault: '', //결과
        }
        
    },
    methods: {
        onSubmitForm(e) {
            if (this.value === this.answer.join('')) { //정답
                this.tries.push({
                    try: this.value,
                    resault: '홈런',
                });
                this.resault = '홈런';
                alert('게임 재시작');
                this.value = '';
                this.answer = getNUmbers();
                this.tries = [];
                this.$refs.answer.focus();
            } else { //정답 틀림
                if(this.tries.length >= 9) { //10번 넘게 시도
                    this.resault = `10번 넘게 틀려서 실패! 답은 ${this.answer.join('')}였습니다!`;
                    alert('게임 재시작');
                    this.value = '';
                    this.answer = getNUmbers();
                    this.tries = [];
                    this.$refs.answer.focus();
                }   
                let strike = 0;
                let ball = 0;
                const answerArray = this.value.split('').map(v => parseInt(v));
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === this.answer[i]) { // 숫자, 자릿수 모두 정답
                        strike++;
                    } else if (this.answer.includes(answerArray[i])) { // 숫자만 정답
                        ball++;
                    }
                }
                this.tries.push({
                    try : this.value,
                    resault: `${strike} 스트라이크, ${ball} 볼입니다.`,
                });
                this.value = '';
                this.$refs.answer.focus();
            }
            //화면에 보여지는 것은 데이터, 화면과 관련이 없는 계산식 같은 경우는 변수로 작성
            
            
        }
    }
}
</script>

<style>

</style>