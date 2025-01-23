<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}
</script>

<template>
  <div class="counter">
    <h2>Counter: {{ count }}</h2>
    <div class="buttons">
      <button @click="increment" class="increment">+</button>
      <button @click="decrement" class="decrement">-</button>
    </div>
  </div>
</template>

<style scoped>
.counter {
  padding: 1rem;
  text-align: center;
}

.buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
}
</style>