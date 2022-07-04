<template>
    <div class="container"> 
        <div class="title"> Traiding Page </div>    
        <div class="text__container">
            <div class="text"> let's start grow your w</div> <div class="text__rectangle">allet!</div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'Home',
}
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100vw;
        height: 100vh;

        background-color: aliceblue;
    }
    .title{
        font-size: 3rem;
    }

    .text__container{
        display: flex;
        flex-direction: row;
        padding: 1rem;
    }

    .text{
        font-size: 2rem;
        flex-grow: 1;
        text-shadow: 2px 2px #999999;
    }

    .text__rectangle{
        font-size: 2rem;
        background-color: rgb(255, 66, 66);
        color: white;
    }

</style>