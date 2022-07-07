<template>
    <div class='container--marketform'>
        <div>
            <span> actual trade: <span class='strong'> {{ actualTrade }} </span> </span>
            <span> actual state: <span class='strong'> {{ actualState }} </span> </span>
        </div>

        <div>
            <span> value of wallet: <span class='strong'> {{walletValue}}$ </span> </span>
        </div>
        
        <div class='box'>
            <button @click="setTrade(-5)"> -5 </button>
            <button @click="setTrade(-1)"> -1 </button>
            <button @click="setTrade(+1)"> +1 </button>
            <button @click="setTrade(+5)"> +5 </button>
        </div>

        <div>
            <button @click="setState"> submit </button>
        </div>
        
    </div>
</template>

<script>

export default{
    name: 'MarketForm',
    data(){
        return{
            actualTrade: 0,
            actualState: 10
        }
    },
    computed: {
        walletValue(){
            return this.actualState * 20;
        }
    },
    methods: {
        setTrade(number){
            this.actualTrade = this.actualTrade + number;
        },
        setState(){
            this.actualState = this.actualState + this.actualTrade;
            this.actualTrade = 0;
        }
    }
}

</script>

<style scoped>
    .container--marketform{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border: 1px solid red;
    }

    .strong{
        font-weight: bold;
    }

    button{
        background-color: white;
        border: 1px solid black;
        border-radius: 10%;
        padding: 5px 10px;
        margin: 5px;
        cursor: pointer;
    }

</style>