<script setup lang="ts">
import { type Todo } from '@/models/todo.model';

interface Props {
    todo: Todo,
}

const props = defineProps<Props>();
const emit = defineEmits<{
    ( e: 'toggleTodo', id: number ): void
}>();

function toggleTodo(): void {
    emit('toggleTodo', props.todo.id);
}
</script>

<template>
    {{ todo.text }}
    <label>
        Erledigt:
        <input type="checkbox" :checked="todo.done" @click="toggleTodo" />
    </label>
</template>
