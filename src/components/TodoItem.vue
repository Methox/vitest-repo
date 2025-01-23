<script setup lang="ts">
defineProps<{
  text: string
  completed: boolean
}>()

const emit = defineEmits<{
  toggle: []
}>()
</script>

<template>
  <div class="todo-item" :class="{ completed }" @click="emit('toggle')">
    <input type="checkbox" :checked="completed" class="checkbox" />
    <span class="text">{{ text }}</span>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
}

.completed .text {
  text-decoration: line-through;
  color: #888;
}
</style>