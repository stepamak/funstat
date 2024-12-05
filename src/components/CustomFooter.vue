<template>
  <header class="flex items-center justify-between p-4 bg-[#2a2ecd] border-2 rounded-xl">
    <div class="logo">
      <img src="/assets/logo.svg" alt="Logo" class="w-full h-full" />
    </div>
    <div class="text-white leading-6 font-normal text-[24px] flex gap-5">
      <p>About</p>
    </div>
    <div class="text-white leading-6 font-normal text-[24px] flex gap-5">
      <p>Docs</p>
    </div>
    <div class="text-white leading-6 font-normal text-[24px] flex gap-5">
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
