<script setup>

</script>

<template>
  <main class="container mx-auto px-4 py-8">

    <section class="my-8">
        <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                <img src="https://via.placeholder.com/500" alt="Company Image"
                    class="w-full h-auto rounded-lg shadow-md">
            </div>
            <div class="md:w-1/2">
                <h2 class="text-2xl font-semibold mb-4">Our Company</h2>
                <p class="text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, felis id vehicula
                    consequat, est massa aliquam justo, ut viverra justo sapien a tortor. Nulla facilisi. Donec
                    feugiat augue eu eros elementum efficitur.
                </p>
            </div>
        </div>
    </section>

    <section class="my-8">
        <h2 class="text-2xl font-semibold mb-4">Our Team</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <!-- Sample Team Member -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://via.placeholder.com/300" alt="Team Member"
                    class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-semibold mb-2">John Doe</h3>
                    <p class="text-gray-700">Position</p>
                </div>
            </div>
            <!-- Add more team members here -->
        </div>
    </section>

</main>
</template>
