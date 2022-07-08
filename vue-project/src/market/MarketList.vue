<template>
    <div class="container">
        <div class="content">
            <p> Market - Cup </p>
            <nav class="content"> 
                <div class="box"> <span> {{ ethernum.name }} : </span> <span> {{ ehtCourse }} </span> </div>
                <PointChart :arrayData="ethernum.course" />
                <div>actual curr on market: {{ ethernum.quantActual }}</div>
                <div> happiness status: {{ Math.floor(ethernum.happiness*100)/100 }}</div>
            </nav>
            <MarketForm :price="ethernum.course[ethernum.course.length-1]" :quant="ethernum.quantActual" />

        </div>

    </div>
</template>

<script>

import MarketForm from './MarketForm.vue';
import PointChart from './PointChart.vue';

export default{
    name: 'MarketList',
    components: {
        MarketForm,
        PointChart
    },
    data(){
        return{
            ethernum: {
                name: 'etherium',
                shortcut: 'ETH',
                course: [],
                quantActual: 10000,
                quantMax: 20000,
                minPrice: 10,
                maxPrice: 150,
                happiness: 5
            }
        }
    },
    computed: {
        ehtCourse(){
            setInterval( () => {
                const maxIndex = 30;
 
                // calculate how many currencies should be sold
                let { happiness, minPrice, maxPrice } = this.ethernum;
                if( happiness >= 5 ){
                    let randomQuant = Math.floor(Math.random() * happiness ) + 2*Math.floor(happiness);
                    this.ethernum.quantActual += randomQuant;
                }else{
                    let randomQuant = Math.floor(Math.random() * happiness ) - (2*Math.floor(happiness));
                    this.ethernum.quantActual += randomQuant;
                }

                // calculate new price of curriency
                let newPrice = (maxPrice / this.ethernum.quantMax) * this.ethernum.quantActual + minPrice;
                newPrice *= 100;
                newPrice = Math.floor(newPrice) / 100;
                this.ethernum.course.push(newPrice);
                if(this.ethernum.course.length > maxIndex){ this.ethernum.course.splice(0,1); }; //max 30 numbers of array

                // generate new happinness
                this.ethernum.happiness = (this.ethernum.quantActual / this.ethernum.quantMax * 10) + (Math.random()*2-1);

            }, 5000 )
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
    }

    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .box{
        width: 400px;
        margin-bottom: 1rem;
    }

</style>