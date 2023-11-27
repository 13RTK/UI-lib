<template>
    <main class="text-center">
        <it-switch v-model="typeValue" variant="success" label="Primary" />
        <form class="mx-auto" :class="theme">
            <it-input
                v-model="statusValue"
                variant="success"
                message="Success"
            />
        </form>
    </main>
</template>

<script setup>
import { ref } from "vue";

const statusValue = ref("");
const theme = ref("light");
</script>
