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
    <div id="todo-container" :title="todo.text">
        <span>{{ todo.text }}</span>
        <div id="todo-controls">
            <label>
                <span>Done</span>
                <input type="checkbox" :checked="todo.done" title="Done" @click="toggleTodo" />
            </label>
            <button title="Delete" @click="deleteTodo" >X</button>
        </div>
    </div>
</template>

<style lang="css" scoped>
#todo-container {
    padding: 1em;
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid gray;
    border-radius: 5px;
    box-shadow: 1px 1px 3px gray;
}

#todo-controls {
    margin-left: 2em;
    display: flex;
    gap: 1em;
}

label {
    display: flex;
    flex-direction: column;

    span {
        font-size: x-small;
    }
}
</style>
