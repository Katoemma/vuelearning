<script setup>
import {ref, onBeforeMount} from 'vue';
import { useRoute } from 'vue-router' 

const route = useRoute();
const id = parseInt(route.params.id);

var product = ref([]);

async function fetchData() {
    try {
        const response = await fetch('https://dummyjson.com/products');

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();
        return data.products;
    } catch (error) {
        console.log(error);
    }
}

onBeforeMount(() => {
    fetchData().then(
       (data)=>(product.value = data.find(thisProduct => thisProduct.id === id))
    );
});


</script>

<template>

<div v-if="product" class="flex justify-center my-auto py-24">
  <div class="max-w-xl mx-auto bg-white shadow-lg overflow-hidden md:max-w-4xl p-4 rounded-lg">
    <!-- Product Details -->
    <div class="flex flex-col md:flex-row ">
      <!-- Product Images (Left on larger screens) -->
      <div class="md:w-1/2 h-full flex flex-col justify-between">
          <div class="flex justify-center md:justify-start">
            <img :src="product.thumbnail" alt="iPhone 9" class=" h-full">
          </div>
          <!-- Small Product Images -->
          <div class="flex justify-between mx-2 mb-0 md:mx-0 mt-12 px-4 ">
            <img v-for="image in product.images" :key="image.index" :src="image" alt="Product Image 1" class="w-16 h-16 object-cover border-2 border-green-200 rounded-lg">
            
          </div>
      </div>
      <!-- Product Information (Right on larger screens) -->
      <div class="md:w-1/2 p-4">
        <h2 class="text-2xl font-semibold mb-2">{{ product.title }}</h2>
        <p class="text-gray-600 mb-4">{{ product.description }}</p>
        <div class="flex items-center justify-between mb-4">
          <div>
            <span class="text-gray-800 font-semibold text-lg">${{ product.price }}</span>
            <span class="text-orange-400  ml-2">(Discount of {{ product.discountPercentage }}%)</span>
          </div>
          <span class="text-yellow-500 font-semibold">{{ product.rating }} &#9733;</span>
        </div>
        <div class="mb-4">
          <h3 class="text-sm text-gray-600 mb-1">Brand:</h3>
          <p class="text-gray-800 font-medium">{{ product.brand }}</p>
        </div>
        <div class="mb-4">
          <h3 class="text-sm text-gray-600 mb-1">Category:</h3>
          <p class="text-gray-800 font-medium">{{ product.category }}</p>
        </div>
        <div class="mb-4">
          <h3 class="text-sm text-gray-600 mb-1">Stock:</h3>
          <p class="text-gray-800 font-medium">94</p>
        </div>
        <div class="flex w-full p-2">
          <button class="bg-green-500 text-white w-full p-2 rounded font-bold">Add Cart</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- skelton loading -->
<div v-else class="max-w-xl mx-auto bg-white shadow-lg overflow-hidden md:max-w-4xl p-4 rounded-lg">
    <!-- Product Details -->
      <div class="flex flex-col md:flex-row">
        <!-- Product Images (Left on larger screens) -->
        <div class="md:w-1/2 h-full flex flex-col justify-between">
          <div class="flex justify-center md:justify-start">
            <div class="bg-gray-200 h-80 w-80 md:w-full md:h-72"></div>
          </div>
          <!-- Small Product Images -->
          <div class="flex justify-between mx-2 mb-0 md:mx-0 mt-12 px-4 ">
            <div v-for="index in 5" :key="index" class="w-16 h-16 bg-gray-200 border-2 border-gray-300 rounded-lg"></div>
          </div>
        </div>
        <!-- Product Information (Right on larger screens) -->
        <div class="md:w-1/2 p-4">
          <div class="bg-gray-200 h-8 w-4/5 mb-4 rounded-lg"></div>
          <div class="bg-gray-200 h-6 w-2/3 mb-4 rounded-lg"></div>
          <div class="flex items-center justify-between mb-4">
            <div class="flex">
              <div class="bg-gray-200 h-6 w-24 rounded-lg mr-2"></div>
              <div class="bg-orange-200 h-6 w-24 rounded-lg"></div>
            </div>
            <div class="bg-gray-200 h-6 w-16 rounded-lg"></div>
          </div>
          <div class="mb-4">
            <div class="bg-gray-200 h-6 w-1/2 mb-1 rounded-lg"></div>
            <div class="bg-gray-200 h-6 w-3/4 rounded-lg"></div>
          </div>
          <div class="mb-4">
            <div class="bg-gray-200 h-6 w-1/2 mb-1 rounded-lg"></div>
            <div class="bg-gray-200 h-6 w-3/4 rounded-lg"></div>
          </div>
          <div class="mb-4">
            <div class="bg-gray-200 h-6 w-1/4 mb-1 rounded-lg"></div>
            <div class="bg-gray-200 h-6 w-1/2 rounded-lg"></div>
          </div>
          <div class="flex w-full p-2">
            <div class="bg-green-200 text-white w-full p-6 rounded font-bold"></div>
          </div>
        </div>
      </div>
    </div>

</template>
