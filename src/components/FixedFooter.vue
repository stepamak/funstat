<template>
  <footer class="flex justify-between w-[100%] bg-[#2a2ecd] p-4 fixed bottom-0 border-[1px] w-full z-20">
    <div class="flex flex-col justify-center items-center">
      <div class="border-[1px] p-2">
        <p class="text-white">Online: {{ onlineCounter }}</p> <!-- Changed to onlineCounter -->
      </div>
      <div class="text-white">©️PumpStats 2024</div>
    </div>
    <div class="pupmstat logo">
      <img src="/assets/midLogoFooter.svg" alt="stat" />
    </div>
    <div class="links flex justify-center items-center h-[40px] gap-3 mt-4">
      <img src="/assets/twitter.svg" alt="twit" />
      <img src="/assets/tg.svg" alt="tg" class="mt-1" />
      <img src="/assets/dex.svg" alt="dex" />
      <img src="/assets/pump.svg" alt="pump" />
      <img src="/assets/git.svg" alt="git" class="w-[35px]" />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FixedFooter',
  data() {
    return {
      onlineCounter: 0
    }
  },
  mounted() {
    this.getOnline();
  },
  methods: {
    getOnline() {
      this.onlineCounter = Math.floor(Math.random() * (55 - 22 + 1)) + 22;
    }
  }
}
</script>

<style lang="scss" scoped></style>
