<template>
    <div>
        <div id="screen">{{mesage}}</div>
        <div>
            <div>평균 시간: {{}}</div>
            <button @click="onReset">리셋</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return { 
            resault: [],
            state: 'waiting',
            message: '클릭해서 시작'
        }        
    },
    methods: {
        
    }
};
</script>

<style>

</style>