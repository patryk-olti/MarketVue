<template>
    <div class="container__pointChart" >
        <SinglePoint 
            v-for="(item, index) in arrayData" 
            :height='item' 
            :width='index' 
            :key='index'
        />
    </div>
</template>

<script>
    import SinglePoint from './SinglePoint.vue'

export default{
    name: 'PointChart',
    components: {
        SinglePoint
    },
    props: {
        arrayData: {
            type: Array
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