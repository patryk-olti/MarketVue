<template>
    <div>
        {{ title }}
    </div>
    <div>
        {{ text }}
    </div>

</template>

<script>
export default{
    name: 'NewsPost',
    props: {
        title: {
            type: String,
            required: true,
            default: 'Empty Title'
        },
        text: {
            type: String,
            required: true,
            default: 'Empty Text'
        }
    }
    
}
</script>