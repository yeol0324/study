<template>
    <div>
        <div id="computer" :style="{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCord} 0`}"></div>
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

        }
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