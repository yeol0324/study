<template>
    <div>
        <h1>{{resault}}</h1>
        <form v-on:submit="onSubmitForm">
            <input ref="answer" maxlength="4" v-model="value" />
            <button type>입력</button>
        </form>
        <div>시도: {{}}</div>
        <ul>
            <li></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {  
            tried: [],
            value: '',
            resault: '',
        }
        
    },
    methods: {
        onSubmitForm(e) {
            e.preventDefault();
            this.tries.push(e.target.value);
            this.value = '';
            this.$refs.answer.focus();
        }
    }
}
</script>

<style>

</style>