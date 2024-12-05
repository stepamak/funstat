<template>
  <header class="flex items-center justify-between p-4 bg-[#2a2ecd] border-2 rounded-xl">
    <div class="logo">
      <img src="/assets/logo.svg" alt="Logo" class="w-full h-full" />
    </div>
    <div class="text-white leading-6 font-normal text-[40px] flex gap-5 cursor-pointer">
      <p>About</p>
    </div>
    <div class="text-white leading-6 font-normal text-[40px] flex gap-5 cursor-pointer">
      <p>Docs</p>
    </div>
    <div class="text-white leading-6 font-normal text-[40px] flex gap-5 cursor-pointer">
      <p>Links</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CustomHeader',
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
