<script setup lang="ts">
import Counter from './components/Counter.vue'
import Greeting from './components/Greeting.vue'
import TodoItem from './components/TodoItem.vue'
</script>

<template>
  <div class="app">
    <Greeting name="Tester" />
    <Counter />
    <TodoItem text="Learn Vue Testing" :completed="false" @toggle="() => {}" />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
}
</style>