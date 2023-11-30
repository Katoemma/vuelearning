<script setup>
import { ref, onMounted } from 'vue'

  const productsData = ref([]);

  async function fetchData(){
    try {
      const response = await fetch('https://dummyjson.com/products');

      if(!response){
        console.log('failed to fetch data network');
      }

      const data = await response.json();

      return data.products;
      
    } catch (error) {
      console.log('there is an error', error)
    }
  }

  onMounted(async()=>{
    await new Promise(resolve => setTimeout(resolve, 2000))

    productsData.value = await fetchData();
  })

</script>

<template>
  
  <div v-if="productsData.length > 0" class="flex flex-col justify-between p-2 md:grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
    
    <div v-for="product in productsData" :key="product.id" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="p-8 rounded-t-lg h-80 w-full" :src="product.thumbnail" alt="Product Image">
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ product.title }}</h5>
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
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>

        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">${{ product.price }}</span>
            <a href="#" class="text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
      </div>
    </div>
 
  </div>

  <!-- skeleton loading -->
  <div class="flex flex-col justify-between md:grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5" v-else>
    <div class=" rounded overflow-hidden shadow-lg animate-pulse" v-for="n in 12" :key="n.index">
          <!-- Skeleton loading for image -->
          <div class="bg-gray-300 h-64"></div>

          <!-- Skeleton loading for product details -->
          <div class="px-6 py-4">
            <!-- Skeleton loading for product name -->
            <div class="bg-gray-400 h-6 w-3/4 mb-4"></div>

            <!-- Skeleton loading for product description -->
            <div class="bg-gray-400 h-4 mb-2"></div>
            <div class="bg-gray-400 h-4 w-5/6"></div>
          </div>

          <!-- Skeleton loading for tags -->
          <div class="px-6 py-4">
            <div class="bg-gray-400 h-4 w-20 inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></div>
            <div class="bg-gray-400 h-4 w-20 inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></div>
            <div class="bg-gray-400 h-4 w-20 inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700"></div>
          </div>

          <!-- Skeleton loading for price -->
          <div class="px-6 py-4">
            <div class="bg-gray-400 h-4 w-16"></div>
          </div>

          <!-- Skeleton loading for add to cart button -->
          <div class="px-6 py-4 w-full">
            <div class="bg-green-200 h-10 w-24 rounded-full w-full"></div>
          </div>
    </div>
  </div>


</template>
  

<style scoped>
</style>
