<script setup lang="ts">
import { type Todo } from '@/models/todo.model';

interface Props {
    todo: Todo,
}

const props = defineProps<Props>();
const emit = defineEmits<{
    ( e: 'toggleTodo', id: number ): void,
    ( e: 'deleteTodo', id: number ): void
}>();

function toggleTodo(): void {
    emit('toggleTodo', props.todo.id);
}
function deleteTodo(): void {
    emit('deleteTodo', props.todo.id);
}
</script>

<template>
    {{ todo.text }}
    <label>
        Erledigt:
        <input type="checkbox" :checked="todo.done" @click="toggleTodo" />
    </label>
    <button @click="deleteTodo" >Delete</button>
</template>
