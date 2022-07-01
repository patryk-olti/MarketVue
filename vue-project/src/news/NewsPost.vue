<template>
    <div class='container'>
        <div class='title'> {{ title }} </div>
        <star-rating v-model:rating="rate" read-only star-size="30"></star-rating>
        <div class='content'> {{ text }} </div>
        <div class="buttonContainer"> <button>more</button> </div>
    </div>
</template>

<script>
    import StarRating from 'vue-star-rating';

export default{
    name: 'NewsPost',
    components: {
        StarRating
    },
    props: {
        title: {
            type: String,
            required: true,
            default: 'Empty Title'
        },
        rate: {
            type: Number,
            required: true
        },
        text: {
            type: String,
            required: true,
            default: 'Empty Text'
        }
    }

}
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: flex-start;

        padding: 0.5rem;
        border-bottom: 1px solid rgb(95, 95, 95);
        box-shadow: 2px 2px 4px 0px rgb(86, 88, 102);
        margin-bottom: 0.5rem;
    }
    .title{
        font-size: 1.4rem;
        margin-bottom: 0.4rem;
        letter-spacing: 1px;
    }

    .content{
        font-size: 0.9rem;
        text-align: justify;
    }

    .buttonContainer{
        width: 100%;
        text-align: end;
    }

    button{
        border: 1px solid black;
        background-color: white;
        padding: 0.2rem 0.5rem;
        cursor: pointer;
    }


</style>