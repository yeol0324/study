<template>
    <div class="ball" :style="styleObject">{{number}}</div>
</template>

<script>
export default {
    name: 'LottoBall',
    props: { //read only
        number: Number,
        // ['number']라고 사용 가능
    },
    // lottoChoice 컴포넌트가 lottoBall 컴포넌트를 사용하는데 부모>자식 간 데이터 넘겨줄 때 props로 받음
    // props로 받은 데이터를 변경할 수는 없음(methods로 변경 등 금지)
    // 카멜 케이스(대소문자 혼용)로 prop의 이름을 정한 경우에 DOM 템플릿 안에서는 케밥 케이스(하이픈으로-연결된-구조)를 사용하여야 올바르게 동작합니다.
    // props 를 데이터로 할당하여 바꿀 순 있으나 자식 컴포넌트상에서만 바뀌기 때문에 부모 데이터와 값이 달라짐
    computed: {
        // 기존 값에서 새로운 결과를 도출(계산) 할 때는 computed 사용
        styleObject() {
            let background; 
            if(this.number <= 10) {
                background= 'red';
            } else if(this.number <= 20) {
                background= 'orange';
            } else if(this.number <= 30) {
                background= 'yellow';
            } else if(this.number <= 40) {
                background= 'blue';
            } else {
                background= 'green';
            }
            return {
                background,
            };
        }        
    },
}
</script>

<style scoped>
    .ball {
        display : inline-block;
        border: 1px solid black;
        border-radius: 20px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        text-align: center;
        margin-right: 20px;
    }
</style>