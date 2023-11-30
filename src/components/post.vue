<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { getPost } from './api' // replace with your actual API module

const route = useRoute()
const postId = ref(route.params.id)
const loading = ref(false)
const post = ref(null)
const error = ref(null)

watchEffect(async () => {
  postId.value = route.params.id
  loading.value = true
  try {
    post.value = await getPost(postId.value)
  } catch (err) {
    error.value = err.toString()
  } finally {
    loading.value = false
  }
})

</script>

<template>

    <div class="container mx-auto px-4 py-8">
        <h1>{{ $route.params.id }}</h1>

        <article class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold mb-4">{{ $route.params.title }}</h2>
            <div class="flex items-center text-gray-500 mb-4">
                <img src="https://via.placeholder.com/40" alt="Author"
                    class="w-8 h-8 rounded-full mr-2">
                <p class="text-sm">Author Name | Published on November 30, 2023</p>
            </div>
            <img src="https://via.placeholder.com/800x400" alt="Post Image" class="w-full mb-6 rounded-lg">
            <div class="prose">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, mauris et hendrerit
                    malesuada, dolor lorem gravida elit, et commodo nisi mi a mauris.</p>
                <p>Curabitur a tortor ut libero volutpat efficitur in nec justo. Fusce consectetur dui nec
                    pellentesque tincidunt. Donec nec fringilla felis, id euismod velit. Duis vel urna in
                    turpis ultricies volutpat. Morbi varius est vel velit blandit bibendum.</p>
                <!-- More post content goes here -->
            </div>
        </article>

    </div>
</template>


