<template>
    <div>
        <NewsPost />
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
                        title: 'First news',
                        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
                    },
                    {
                        id: 2,
                        title: 'Second news',
                        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
                    },
                    {
                        id: 3,
                        title: 'Third news',
                        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
                    }
                ]
            }
        }

    }
</script>