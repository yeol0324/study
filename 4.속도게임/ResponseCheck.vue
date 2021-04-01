<template>
<!-- template 바로 자식 안에는 template 사용 안 됨 -->
    <div>
        <div id="screen" :class="state" @click="onClickScreen"><b>{{message}}</b></div>
        <div v-if="result.length">
            <!-- 이 div는 역할이 없음(자식 태그들 감싸주는 역할) template으로 사용 가능 -->
            <!-- v-show="A" A가 true 면 display:block, false 면 display:none -->
            <!-- v-show="A" A가 true 면 보임, false 면 주석처리-->
            <!-- 태그가 있냐 없냐는 레이아웃에 영향을 줌!! -->
            <div>평균시간 : {{average}}ms</div>
            <!-- {{}}사이는 데이터를 텍스트로 넣는 부분, 계산은 최대한 이곳에서 하지 말고 computed속성에서 하기 -->
            <button @click="onReset">리셋</button>
            <div>{{result}}</div>
        </div>
    </div>
</template>

<script>
let startTime = 0;
let endTime = 0;
let timeout = null;
// 화면이랑 관련 없음 > 변수, 화면이랑 관련 있음 > 데이터
export default {
    data() {
        return { 
            message: '클릭해서 시작',
            result: [],
            state: 'waiting',
        }
        
    },
    computed: {
        average() {
            return this.result.reduce((a, c) => a + c, 0) / result.length || 0
        }
    },
    //data, computed 차이 (일반 데이터를 가공해서 쓰고 싶을 때 computed를 사용)
    //computed사용하는 이유 = cashing이 되기 때문에!! (ex. 다른 관련이 없는 데이터가 바뀌면 기존에 캐싱 된 컴퓨티드가 다시 사용됨,,, 불필요한 계산을 또 안 할 수 있음 )
    methods: {
        onReset() {
            this.result = []
        },
        onClickScreen() {
            if(this.state === 'waiting') {
                this.state = 'ready';
                this.message = '색이 바뀌면 클릭';
                timeout = setTimeout(() => {
                    this.state = 'now';
                    this.message = '클릭!';
                    startTime = new Date();
                }, Math.floor(Math.random() * 1000) + 2000);
            }else if(this.state === 'ready') {
                clearTimeout(timeout);
                this.state = 'waiting';
                this.message = '색 바뀌면 누르세요 ㅎㅎ;';
            }else if(this.state === 'now') {
                endTime = new Date();
                this.state = 'waiting';
                this.message = '클릭해서 시작';
                this.result.push(endTime - startTime);
            }
        }
    }
}
</script>

<style scoped>
    #screen{ width: 300px; height: 300px; text-align: center; user-select: none;}
    #screen.waiting{
        background-color: aquamarine;
    }
    #screen.ready{
        background-color: palevioletred;
    }
    #screen.now{
        background-color: yellowgreen;
    }
</style>