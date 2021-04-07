<template>
    <td @click="onClickcTd">{{cellData}}</td>
</template>

<script>
export default {
    props: {
        cellData: String,
        rowIndex: Number,
        cellIndex: Number,
    },
    methods: {
        onClickcTd() {
            console.log(this.$root.$data);
            console.log(this.$parent.$data);
            this.$root.$data.turn = this.$root.$data.turn === 'O' ? 'X' : 'O';
        }
    }
}
</script>

<style scoped>
td {
        border: 1px solid black;
        width: 40px;
        height: 40px;
        text-align: center;
    }
</style>