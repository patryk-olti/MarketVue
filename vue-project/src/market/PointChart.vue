<template>
    <div class="container__pointChart" >
        <SinglePoint 
            v-for="(item, index) in arrayData" 
            :height='item' 
            :width='index' 
            :key='index'
        />
        <SingleHorizontalLine :height='85'/>
        <SingleHorizontalLine :height='86'/>
        <SingleHorizontalLine :height='87'/>
    </div>
    
</template>

<script>
    import SinglePoint from './SinglePoint.vue';
    import SingleHorizontalLine from './SingleHorizontalLine.vue';

export default{
    name: 'PointChart',
    components: {
        SinglePoint,
        SingleHorizontalLine
    },
    props: {
        arrayData: {
            type: Array
        },
        actualMax:{
            type: Number
        },
        actualMin: {
            type: Number
        }
    }
}
</script>

<style>
    .container__pointChart{
        position: relative;
        width: 300px;
        height: 200px;
        border: 1px solid black;
    }
</style>