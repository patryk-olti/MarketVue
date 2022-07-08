<template>
    <div class='line' :style='position'></div>
</template>

<script>
    export default{
        name: 'SingleHorizontalLine',
        props: {
            height: {
                type: Number,
                required: true
            },
        },
        computed: {
            position(){
                return{
                    "top": `${(88-this.height)*50}px`
                }
            }
        }
    }
</script>

<style>
    .line{
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: rgb(148, 148, 148);
    }

</style>