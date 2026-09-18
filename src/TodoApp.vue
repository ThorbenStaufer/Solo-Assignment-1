<script setup lang="ts">
import { computed, ref } from 'vue';
import { FilterOption, type Todo } from './models/todo.model.ts';
import TodoList from './components/TodoList.vue';

const todos = ref<Todo[]>([
  { id: 0, text: 'Read documentation for Vue.js', done: true },
  { id: 1, text: 'Successfully pass the first solo assignment', done: false },
  { id: 2, text: 'Review this solo assignment', done: false }
]);
const activeFilter = ref<FilterOption>(FilterOption.ALL);

const filteredTodos = computed<Todo[]>(() => {
  switch (activeFilter.value) {
    case FilterOption.ALL: return todos.value;
    case FilterOption.OPEN: return todos.value.filter((todo) => !todo.done);
    case FilterOption.DONE: return todos.value.filter((todo) => todo.done);
  }
})

function toggleTodo(id: number): void {
  todos.value = todos.value.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo);
}
</script>

<template>
  <label>
    Filter:
    <select id="todoFilter" v-model="activeFilter">
      <option :value="FilterOption.ALL">Alle</option>
      <option :value="FilterOption.OPEN">Offen</option>
      <option :value="FilterOption.DONE">Erledigt</option>
    </select>
  </label>
  <TodoList :todos="filteredTodos" @toggle-todo="toggleTodo" />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
