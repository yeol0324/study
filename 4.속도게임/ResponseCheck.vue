<template>
    <div>
        <div id="screen" :class="state" @click="onClickScreen"><b>{{message}}</b></div>
        <div>
            <div>평균시간 : {{resault.reduce((a, c) => a + c, 0) / resault.length || 0}}ms</div>
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