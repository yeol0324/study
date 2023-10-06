<template>
    <table>
        <tr-component v-for="(rowData, index) in tableData" :key="index" :row-data="rowData" />
        <!-- (rowData, index) 가로 > row, 가로 데이터만큼 반복문 -->
    </table>
</template>
<script>
import TrComponent from './TrComponent';

export default {
    props: {
        tableData: Array,
    },
    components: {
        TrComponent,
    },
};
</script>