<template>
    <div class="container"> 
        <p> Market - Cup </p>
        <nav> 
            <div> Eth 2 </div>
            <div> Eth </div>
        </nav>
    </div>
</template>

<script>
export default{
    name: 'MarketList',
    date(){
        return{
            ehernum: {
                name: 'etherium',
                shortcut: 'ETH',
                course: [12,16,13,15]
            }
        }
    }
}
</script>