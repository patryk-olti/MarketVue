<template>
    <div class='container--marketform'>
        <div>
            <span> actual trade: <span class='strong'> {{ actualTrade }} </span> </span>
            <span> price of trade: <span class='strong'> {{ Math.abs(actualTrade * price) }} </span> </span>
        </div>

        <div>
            <span> actual state: <span class='strong'> {{ actualState }} </span> </span>
            <span> value of wallet: <span class='strong'> {{walletValue}}$ </span> </span>
        </div>
        
        <div class='box'>
            <button @click="setTrade(-5)"> -5 </button>
            <button @click="setTrade(-1)"> -1 </button>
            <button @click="setTrade(+1)"> +1 </button>
            <button @click="setTrade(+5)"> +5 </button>
        </div>

        <div>
            <button @click="setState()"> submit </button>
        </div>

        <div>
            <span> fiat wallet: <span class='strong'> {{actualWallet}}$ </span> </span>
        </div>
        
    </div>
</template>

<script>

export default{
    name: 'MarketForm',
    data(){
        return{
            actualTrade: 0,
            actualState: 0,
            actualWallet: 200
        }
    },
    props:{
        price: {
            type: Number,
            required: true,
            default: 10
        },
        quant: {
            type: Number,
            required: true,
            default: 1
        }
    },
    computed: {
        walletValue(){
            return this.actualState * this.price;
        }
    },
    methods: {
        setTrade(number){
            this.actualTrade = this.actualTrade + number;
        },
        setState(){
            let actualPrice = this.actualTrade * this.price;

            if( actualPrice <= this.actualWallet && this.actualTrade > 0 ){
                this.actualState = this.actualState + this.actualTrade;
                this.actualWallet = this.actualWallet - actualPrice;
                this.quant += this.actualTrade;
            }

            if( actualPrice < 0 && Math.abs(this.actualTrade) <= this.actualState ){
                this.actualState = this.actualState + this.actualTrade;
                this.actualWallet = this.actualWallet - actualPrice;
                this.quant += this.actualTrade;
            }

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