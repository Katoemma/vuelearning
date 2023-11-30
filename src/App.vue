<script setup>

import navbar from './components/navbar.vue';
import Home from './views/home-page.vue';
import About from './views/About-page.vue';
import Footy from './components/footy.vue';


</script>

<template>
  <navbar />
  <router-view />
  <Footy />
</template>


<style>

</style>