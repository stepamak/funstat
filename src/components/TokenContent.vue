<template>
  <div ref="wrapper" class="scroll-wrapper">
    <div ref="content" class="scroll-content">
      <slot />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "ScrollSection",
  props: {
    duration: {
      type: Number,
      default: 1,
    },
    delay: {
      type: Number,
      default: 0.5,
    },
    ease: {
      type: String,
      default: "back.out(1.7)",
    },
  },
  mounted() {
    const content = this.$refs.content;

    gsap.from(content, {
      y: "+=100", // Смещение вниз на 100px
      autoAlpha: 0, // Исходная прозрачность
      duration: this.duration,
      delay: this.delay,
      ease: this.ease,
      scrollTrigger: {
        trigger: this.$refs.wrapper,
        start: "top 80%", // Анимация начнётся, когда блок окажется в зоне 80% от верхнего края
        end: "bottom top", // Конец анимации
        scrub: false, // Анимация не привязана к скроллу
      },
    });
  },
};
</script>

<style scoped>
.scroll-wrapper {
  position: relative;
  height: var(--section-height, 100vh);
  overflow: hidden;
}

.scroll-content {
  will-change: transform, opacity;
}
</style>
