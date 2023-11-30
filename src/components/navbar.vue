<script setup>

</script>

<template>
  <header>
    <nav class="sticky z-50 top-0 left-0 flex p-2 bg-white justify-between items-center px-8">
        <img src="../assets/images/green logo.png" alt="logo" class="w-12">

        <ul class="flex gap-4">
            <router-link  to="/" class="text-xl"> Home</router-link>
            <router-link to="/about" class="text-xl"> About</router-link>
            <router-link to="/contact" class="text-xl"> Contact</router-link>
        </ul>

        <ul>
            <router-link to="/login" class="text-xl"> Login</router-link>
            <router-link to="/register" class="text-xl"> Register</router-link>
        </ul>
    </nav>

    

  </header>
</template>

<style scoped></style>