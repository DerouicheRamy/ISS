<script setup>
import navbar from './components/header.vue';
import foot  from './components/footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
<navbar/>
<RouterView/>
<foot/>
</template>


