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
    x: {
      type: Number,
      default: 0,
    },
    y: {
      type: Number,
      default: 0,
    }
  },
  mounted() {
    const content = this.$refs.content;

    gsap.from(
      content,
      {
        delay: this.delay,
        y: this.y,
        x: this.x,
        autoAlpha: 0,
        duration: this.duration,
        ease: this.ease,
        scrollTrigger: {
          trigger: this.$refs.wrapper,
          start: "top 60%",
          end: "bottom top",
          scrub: false,
        },
      }
    );
  },
};
</script>

<style scoped>
.scroll-wrapper {
  position: relative;
  height: var(--section-height, 80vh);
  overflow: hidden;
}

.scroll-content {
  will-change: transform, opacity;
}
</style>
