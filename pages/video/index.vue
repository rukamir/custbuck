<template>
    <div>
        <div>JimmyFlix</div>
      <NuxtLink v-for="vid in vidlis" :to="`/video/${vid}`">{{ vid }}</NuxtLink>
    </div>
</template>
  
<script setup>
const { data: vidlis } = await useFetch('/api/videos')

</script>