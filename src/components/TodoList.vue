<script setup lang="ts">
import type { Todo } from '@/models/todo.model.ts';
import TodoItem from './TodoItem.vue';

interface Props {
    todos: Todo[]
}

defineProps<Props>();
const emit = defineEmits<{
    ( e: 'toggleTodo', id: number ): void,
    ( e: 'deleteTodo', id: number ): void
}>();

function toggleTodo(id: number): void {
    emit('toggleTodo', id);
}
function deleteTodo(id: number): void {
    emit('deleteTodo', id);
}
</script>

<template>
    <ul>
        <li v-for="todo in todos" :key="todo.id" >
            <TodoItem :todo @toggle-todo="toggleTodo" @delete-todo="deleteTodo" />
        </li>
    </ul>
</template>