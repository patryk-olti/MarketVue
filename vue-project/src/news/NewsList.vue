<template>
    <div class='container'>
        <div class='title'> Breaking News! </div>

        <div v-for="item in list" :key="item.id" >
            <NewsPost :title="item.title" :text="item.text" />
        </div>
    </div>

</template>

<script>
    import NewsPost from './NewsPost.vue'

    export default{

        name: 'NewsList',
        components: {
            NewsPost
        },
        data(){
            return{
                list: [
                    {
                        id: 1,
                        title: 'Did Razzlekhan and Dutch Pull Off History’s Biggest Crypto Heist?',
                        text: 'The hackers had been inside the Bitfinex servers for weeks before attempting the heist. They’d watched users on the cryptocurrency exchange buy and sell Bitcoins. They’d studied the commands that controlled the security system. It was as if they were hiding in an air duct above a bank’s vault, watching as tellers meticulously moved cash in and out, looking for vulnerabilities.'
                    },
                    {
                        id: 2,
                        title: 'Can Crypto’s Richest Man Stand the Cold?',
                        text: 'During the first few months of this year—back when buying digital tokens named after dog memes was still seen, at least in some of the most forward-thinking circles, as a perfectly reasonable way to participate in finance’s bright new future—the cryptocurrency exchange Binance promoted a new, low-risk way to get in on the action. It urged its customers to invest in something called TerraUSD. The token was what’s known in the trade as a “stablecoin,” a type of cryptocurrency that functions a bit like ...'
                    },
                    {
                        id: 3,
                        title: 'Elon Musk Sounds Off on Recession Risk, Twitter Deal and Trump',
                        text: 'Elon Musk, the billionaire visionary and oftentimes erratic entrepreneur, struck a sober tone Tuesday as he forecast a probable recession in the US and left doubts about his commitment to a $44 billion takeover of Twitter Inc.'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;

        padding: 1rem;
    }
    .title{
        font-size: 2.4rem;
        margin-bottom: 1rem;
    }

</style>