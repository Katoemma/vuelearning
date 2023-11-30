<script setup>
import {ref, onMounted} from 'vue'


const postsData = ref([]);

async function fetchData(){
   try {
       const response = await  fetch('https://dummyjson.com/posts');

       if(!response.ok){
           throw new Error(response.statusText);
       }

       const data = await response.json();
       //console.log(data.find(post => post.id === 2));
       postsData.value = data.posts;
   } catch (error) {
       console.log(error);
   }
   
}


onMounted(fetchData);

</script>


<template>
  <div class="max-w-screen-2xl mx-auto relative">
    <h2 class="text-3xl font-bold mb-6">Latest Blog Posts</h2>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <!-- Blog Post 1 -->
      <div v-for="post in postsData" :key="post.id" class="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="../assets/images/green logo.png" alt="Blog Post Image" class="w-full h-48 object-cover" id="postImage">
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2" id="postTitle">{{ post.title }}</h3>
          <p class="text-gray-700 mb-4" id="postContent">{{ post.body }}</p>
          <div class="flex items-center justify-between">
            <div>
              <!-- Tags -->
              <div class="flex space-x-2">
                <span v-for="tag in post.tags" :key="tag" class="bg-gray-200 text-gray-600 py-1 px-2 rounded-md text-sm">{{ tag }}</span>
              </div>
              <!-- Reactions -->
              <p class="text-gray-500 text-sm mt-2">Reactions: <span class="font-semibold text-blue-500" id="postReactions">{{ post.reactions }}</span></p>
            </div>
            <router-link :to="{ name:'Post', params:{id: post.id,title : post.title, body: post.body}}" class="text-white hover:underline bg-green-500 px-4 py-2 rounded">Read more</router-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

