<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <div class="greeting">
    <h1>Hello, {{ name }}!</h1>
  </div>
</template>

<style scoped>
.greeting {
  padding: 1rem;
  text-align: center;
}
</style>