<template>
    <div class="container">
        <div class="content">
            <p> Market - Cup </p>
            <nav> 
                <div> <span> {{ ethernum.name }} : </span> <span> {{ ehtCourse }} </span> </div>
            </nav>
            <MarketForm :price="ethernum.course[ethernum.course.length-1]"/>
        </div>

    </div>
</template>

<script>

import MarketForm from './MarketForm.vue';

export default{
    name: 'MarketList',
    components: {
        MarketForm
    },
    data(){
        return{
            ethernum: {
                name: 'etherium',
                shortcut: 'ETH',
                course: [52,46,33,35]
            }
        }
    },
    computed: {

        ehtCourse(){
            setInterval( () => {
                let newValue = Math.floor(Math.random() * 10 + 30);
                this.ethernum.course.push(newValue);
            }, 10000 )
            return this.ethernum.course;
        }

    }
}
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100vw;
        min-height: 100vh;

        border: 1px solid black;
    }

    .content{
        border: 1px solid red;
    }

</style>