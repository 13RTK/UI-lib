<template>
    <AppHeader />
    <AppLogin />
</template>

<script>
import AppHeader from "@/components/Header.vue";
import AppLogin from "@/components/Login.vue";

export default {
    components: {
        AppHeader,
        AppLogin,
    },
};
</script>
