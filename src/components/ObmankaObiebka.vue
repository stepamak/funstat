<template>
  <div
    class="overflow-hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
    v-if="isMobile"
  >
    <div class="relative w-full h-full bg-[#2a2ecd] p-5 shadow-xl">
      <div
        class="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white text-[54px]"
      >
        <p>Only for desktop :(</p>
        <!-- ЛИНК НА ТВИТТЕР -->
      </div>
    </div>
  </div>
  <div v-else class="overflow-hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
    <div class="relative w-full h-full bg-[#2a2ecd] p-5 shadow-xl">
      <div
        class="absolute cursor-pointer font-bold transition-all duration-500 ease-in-out fade-in"
        :style="{
          top: position.top + 'px',
          left: position.left + 'px',
          zIndex: 10,
        }"
        @mouseenter="moveRandom"
      >
        <img
          src="/assets/enterObiebka.svg"
          alt="obiebka"
          class="2xl:w-[300px] 2xl:h-[300px] xl:h-[250px] xl:w-[250px] md:w-[200px] md:top-0 md:left-0 animate-rotate"
        />
      </div>

      <div class="absolute right-[20px] top-[30%] 2xl:top-[25%]">
        <img
          src="/assets/pf_best.png"
          alt="obiebka"
          class="fade-in 2xl:w-[900px] xl:w-[700px] md:w-[550px] rounded-xl"
        />
      </div>

      <div class="absolute top-0 left-0 w-full h-[80px] overflow-hidden z-10 rounded-sm">
        <div class="relative w-full h-10 overflow-hidden rounded-xl">
          <div class="loading-bar"></div>
        </div>
      </div>

      <div class="relative z-20">
        <p
          v-for="(line, index) in textLines"
          :key="index"
          :style="{ animationDelay: `${line.delay}s` }"
          class="absolute 2xl:text-[80px] xl:text-[54px] md:text-[48px] leading-tight text-white opacity-0 animate-fade-in"
          :class="line.position"
        >
          {{ line.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      position: {
        top: window.innerHeight - 300,
        left: window.innerWidth - 300,
      },
      closeTimer: 5,
      textLines: [
        { text: 'It', position: 'top-20 left-0', delay: 0 },
        { text: 'All', position: 'top-40 left-20', delay: 1 },
        { text: 'Started', position: 'top-60 left-40', delay: 3.5 },
        { text: 'On', position: 'top-80 left-60', delay: 1.5 },
        { text: '1.19.24', position: 'top-[400px] left-80', delay: 3 },
        { text: 'And', position: 'top-[480px] left-60', delay: 0.5 },
        { text: "That's what came", position: 'top-[560px] left-40', delay: 2 },
        { text: 'out of it...', position: 'top-[640px] left-80', delay: 2.5 },
      ],
    }
  },
  computed: {
    isMobile() {
      return window.innerWidth < 1000
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.startCloseTimer()
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.$forceUpdate()
    },
    moveRandom() {
      const modal = this.$el.querySelector('.relative')
      const modalRect = modal.getBoundingClientRect()

      const randomTop = Math.random() * (modalRect.height - 50)
      const randomLeft = Math.random() * (modalRect.width - 100)

      this.position.top = randomTop
      this.position.left = randomLeft
    },
    startCloseTimer() {
      this.timerInterval = setInterval(() => {
        if (this.closeTimer > 0) {
          this.closeTimer -= 1
        } else {
          this.closeModal()
        }
      }, 1000)
    },
    closeModal() {
      clearInterval(this.timerInterval)
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
@keyframes rotateAnimation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-rotate {
  animation: rotateAnimation 7s infinite linear;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

@keyframes loadingAnimation {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

.loading-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: white;
  animation: loadingAnimation 6s linear forwards;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;
  animation-delay: 1s;
}
</style>
