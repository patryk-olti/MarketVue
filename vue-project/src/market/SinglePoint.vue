<template>
    <div class='dot' :style='position'></div>
</template>

<script>
    export default{
        name: 'SinglePoint',
        props: {
            height: {
                type: Number,
                required: true
            },
            width: {
                type: Number,
                required: true
            }
        },
        computed: {
            position(){
                return{
                    "top": `${(88-this.height)*50}px`,
                    'left': `${this.width*10}px`
                }
            }
        }
    }
</script>

<style>
    .dot{
        position: absolute;
        top: 50px;
        left: 50px;

        width: 7px;
        height: 7px;
        border: 1px solid black;
        border-radius: 50%;
    }

</style>