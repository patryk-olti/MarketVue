<template>
    <div class='container__news'>
        <NewsList />  
    </div>
</template>

<script>
import NewsList from '../news/NewsList.vue'

export default{
    name: 'News',
    components: {
        NewsList
    }
}
</script>

<style scoped>
    .container__news{
        width: 100vw;
        min-height: 100vh;
        background-color: aliceblue;
    }

</style>