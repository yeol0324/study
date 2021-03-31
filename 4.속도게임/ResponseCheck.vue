<template>
    <div>
        <div id="popup">개빨라~!~!</div>
        <div id="screen" :class="state" @click="onClickScreen"><b>{{message}}</b></div>
        <div>
            <div>평균시간 : {{average}}ms</div>
            <!-- {{}}사이는 데이터를 텍스트로 넣는 부분, 계산은 최대한 이곳에서 하지 말고 computed속성에서 하기 -->
            <button @click="onReset">리셋</button>
            <div>{{resault}}</div>
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
            resault: [],
            state: 'waiting',
        }
        
    },
    computed: {
        average() {
            return this.resault.reduce((a, c) => a + c, 0) / resault.length || 0
        }
    },
    //data, computed 차이 (일반 데이터를 가공해서 쓰고 싶을 때 computed를 사용)
    //computed사용하는 이유 = cashing이 되기 때문에!! (ex. 다른 관련이 없는 데이터가 바뀌면 기존에 캐싱 된 컴퓨티드가 다시 사용됨,,, 불필요한 계산을 또 안 할 수 있음 )
    methods: {
        onReset() {
            this.resault = []
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
                this.resault.push(endTime - startTime);
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