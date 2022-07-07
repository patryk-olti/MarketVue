<template>
    <div class='container--marketform'>
        <div>
            <span> actual trade: <span class='strong'> 10 </span> </span>
            <span> actual state: <span class='strong'> 99 </span> </span>
        </div>
        
        <div class='box'>
            <button> -5 </button>
            <button> -1 </button>
            <button> +1 </button>
            <button> +5 </button>
        </div>

        <div>
            <button> submit </button>
        </div>
        


    </div>
</template>

<script>

export default{
    name: 'MarketForm'
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