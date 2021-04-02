<template>
    <div>
        <div id="computer" :style="{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}"></div>
        <!-- v-bind:class, v-bind:style 은 객체형식을 지원 -->
        <!-- js에서는 -를 빼기로 인식하기때문에
        카멜 표기법 사용 ex) backgroundImage 
        파스칼 표기법 ex)HelloWorld // 스네이크표기법 ex) hello_world
        -->
        <div>
            <button @click="onClickButton('바위')">바위</button>
            <button @click="onClickButton('가위')">가위</button>
            <button @click="onClickButton('보')">보</button>
        </div>
        <div>{{result}}</div>
        <div>현재 {{score}}점</div>
    </div>
</template>

<script>
const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
};
let interval = null;
export default {
    data() {
        return { 
            imgCoord: rspCoords.바위,
            // 뭘 의미하는지 표시할 때 유용하게 사용 가능!!
            result: '',
            score: 0,
        }
        
    },
    computed: {

    },
    methods: {
            onClickButton(choice) {
                //인수를 넣고 매개변수로 받는 행위가 가능            
            },
        },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
        // created 컴포넌트가 화면에 보여지는 순간 (화면에 나타나기 전)  js상에만 존재    
    },
    beforeMont() {
        console.log('beforeMont');
    },
    mounted() {
        console.log('mounted');
        // 화면에 나타난 후 화면까지 존재
        interval = setInterval(() => {
            if(this.imgCoord === rspCoords.바위 ) {
                this.imgCoord = rspCoords.가위;
            }else if(this.imgCoord === rspCoords.가위 ) {
                this.imgCoord = rspCoords.보;
            }else if(this.imgCoord === rspCoords.보 ) {
                this.imgCoord = rspCoords.바위;
            }
        }, 100);
        // clearInterval로 멈추기 위해서 interval 변수에 저장
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
        // 화면에 데이터가 바껴서 화면이 다시 그려질 때
    },
    beforeDestroy() {
        console.log('beforeDestroy');
        // RockSP 컴포넌트가 사라져도 interval 이 계속 실행된다면 문제... 쓸데없는 작업이 계속 실행됨, 메모리리크(메모리 누수 발생) 방지 위해 정리해줌
        clearInterval(interval);
    },
    destroyed() {
        console.log('destroyed');
        // 화면에 있다가 없어질 때
    }
    
}
</script>

<style scoped>
    #computer{
        width: 142px;
        height: 200px;
        background-position: 0 0;
    }
</style>