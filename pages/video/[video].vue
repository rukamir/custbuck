
<template>
    <div class="p-12 absolute top-0 right-0 w-full h-full flex flex-col justify-center uix-mission mb-500:p-4">
    <video id="my-video"
        class="video-js"
        controls
        preload="auto"
        width="640"
        height="264"
        data-setup="{}">
            <source :src="`https://custbuck-a-dev.nyc3.cdn.digitaloceanspaces.com/${videoid}`" type="video/mp4" />
    </video>
    </div>
</template>

<script setup>
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
const { data: videoid } = await useFetch('/api/videos')

</script>