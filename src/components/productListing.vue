<script setup>
import {ref,onBeforeMount,onMounted} from 'vue'


const products = ref([]);

async function fetchData(){
   try {
       const response = await  fetch('https://dummyjson.com/products');

       if(!response.ok){
           throw new Error(response.statusText);
       }
       const data = await response.json();
       products.value = data.products;
   } catch (error) {
       console.log(error);
   }
   
}


onBeforeMount(fetchData)


</script>


<template>
  <div class="max-w-screen-2xl mx-auto relative">
    <h2 class="text-3xl font-bold mb-6">All Products</h2>

    <div v-if="products.length === 0" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <!-- Skeleton Loading for Blog Post -->
        <div v-for="index in 8" :key="index" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow animate-pulse dark:bg-gray-800 dark:border-gray-700">
            <div class="bg-gray-200 dark:bg-gray-600 h-72 rounded-t-lg"></div>
            <div class="px-5 pb-5">
                <div class="bg-gray-200 dark:bg-gray-600 h-6 w-3/4 mb-2 rounded-lg"></div>
                <div class="bg-gray-200 dark:bg-gray-600 h-4 w-1/2 rounded-lg"></div>
                <div class="bg-gray-200 dark:bg-gray-600 h-4 w-1/4 mt-2 mb-5 rounded-lg"></div>
                <div class="flex items-center justify-between">
                    <div class="bg-gray-200 dark:bg-gray-600 h-6 w-1/4 rounded-lg"></div>
                    <div class="bg-gray-200 dark:bg-gray-600 h-10 w-1/3 rounded-lg"></div>
                </div>
            </div>
        </div>
    </div>
   

    <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      

      <div v-for="product in products" :key="product.id" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <img class="rounded-t-lg h-72 w-full object-cover" :src="product.thumbnail" alt="product image" />
          </a>
          <div class="px-5 pb-5">
              <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ product.title }}</h5>
                  <p></p>
              </a>
              <div class="flex items-center mt-2.5 mb-5">
                  <div class="flex items-center space-x-1 rtl:space-x-reverse">
                      <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                  </div>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{{ product.rating }}</span>
              </div>
              <div class="flex items-center justify-between">
                  <span class="text-3xl font-bold text-gray-900 dark:text-white">${{ product.price }}</span>
                  <router-link :to="{ name: 'product', params:{id:product.id}}" class="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</router-link>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

