<template>
    <div class='container__market'>
        <MarketList />
    </div>
</template>

<script>
import MarketList from '../market/MarketList.vue';

export default{
    name: 'Market',
    components: {
        MarketList
    }
}
</script>

<style scoped>
    .container__market{
        width: 100vw;
        min-height: 100vh;
        background-color: aliceblue;
    }

</style>