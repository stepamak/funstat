<template>
  <div class="overflow-hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
    <div class="relative w-full h-full bg-[#2a2ecd] p-5 shadow-xl">
      <button
        class="absolute top-5 right-5 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 focus:outline-none"
        @click="$emit('close')"
      >
        ✕
      </button>

      <slot />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
button {
  transition: background-color 0.2s ease;
}
</style>
