<template>
  <header class="flex items-center w-full justify-between bg-[#2a2ecd] border-[1px] p-0">
    <div class="logo ml-8">
      <img src="/assets/logo.svg" alt="Logo" class="w-full h-full" />
    </div>
    <div class="flex items-center gap-12 mr-14 text-[32px]">
      <div class="text-white leading-6 font-normal flex gap-5 cursor-pointer">
      <p>About</p>
    </div>
    <div class="text-white leading-6 font-normal flex gap-5 cursor-pointer">
      <p>Docs</p>
    </div>
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
