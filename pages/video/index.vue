<template>
    <div>
        <div>JimmyFlix</div>
        <div v-for="vid in vidlis">
            <NuxtLink :to="`/video/${vid}`">{{ vid }}</NuxtLink>
        </div>
    </div>
</template>
  
<script setup>
const { data: vidlis } = await useFetch('/api/videos')


</script>