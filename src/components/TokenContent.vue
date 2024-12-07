<template>
  <div>
    <main>
      <section class="content fluid">
        <h2>
          <span aria-hidden="true">you can check:&nbsp;</span>
          <span class="sr-only">you can ship things.</span>
        </h2>
        <ul aria-hidden="true" style="--count: 22">
          <li v-for="(item, index) in items" :key="index" :style="{ '--i': index }">
            {{ item }}
          </li>
        </ul>
      </section>
      <section>
        <h3>{{ card.name }}</h3>
        <p>{{ card.address }}</p>
        <p>{{ card.market_cap }}</p>
        <p>{{ card.holder }}</p>
      </section>
    </main>
  </div>
</template>

<script>
import gsap from 'https://cdn.skypack.dev/gsap@3.12.0'
import ScrollTrigger from 'https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger'
import { useTokenStore } from '../stores/tokenStore'

export default {
  setup() {
    return {
      tokenStore: useTokenStore(),
    }
  },

  data() {
    return {
      config: {
        theme: 'dark',
        start: gsap.utils.random(0, 100, 1),
        end: gsap.utils.random(900, 1000, 1),
        scroll: true,
      },
      items: ['volumes', 'revenues', 'top creators', 'tokens', 'activitys', 'top traders'],
      card: {},
    }
  },
  mounted() {
    this.fetchToken()
    this.setupPane()
    this.setupScrollAnimations()
  },
  methods: {
    async fetchToken() {
      await this.tokenStore.getFirstToken()
      this.card = this.tokenStore.firstToken
    },
    update() {
      document.documentElement.dataset.theme = this.config.theme
      document.documentElement.dataset.syncScrollbar = this.config.scroll
      document.documentElement.style.setProperty('--start', this.config.start)
      document.documentElement.style.setProperty('--scroller', this.config.start)
      document.documentElement.style.setProperty('--end', this.config.end)
    },
    setupScrollAnimations() {
      if (!CSS.supports('(animation-timeline: scroll()) and (animation-range: 0% 100%)')) {
        gsap.registerPlugin(ScrollTrigger)
        const items = gsap.utils.toArray('ul li')

        for (let i = 0; i < items.length; i++) {
          const item = items[i]
          gsap.set(item, { opacity: i !== 0 ? 0.2 : 1 })

          gsap
            .timeline({
              scrollTrigger: {
                scrub: 0.25,
                trigger: item,
                start: 'center center+=4lh',
                end: 'center center-=4lh',
              },
            })
            .to(item, { opacity: 1, ease: 'none', duration: 0.1 })
            .to(item, { opacity: i !== items.length - 1 ? 0.2 : 1, ease: 'none', duration: 0.1 })
        }

        gsap.fromTo(
          document.documentElement,
          { '--scroller': this.config.start },
          {
            '--scroller': this.config.end,
            ease: 'none',
            scrollTrigger: {
              scrub: 0.1,
              trigger: 'ul',
              start: 'top center-=1lh',
              end: 'bottom center+=1lh',
            },
          },
        )
        gsap.fromTo(
          document.documentElement,
          { '--chroma': 0 },
          {
            '--chroma': 0.3,
            duration: 0.1,
            ease: 'none',
            scrollTrigger: {
              scrub: 0.2,
              trigger: 'ul',
              start: 'top center-=2lh',
              end: 'top center',
            },
          },
        )
        gsap.fromTo(
          document.documentElement,
          { '--chroma': 0.3 },
          {
            '--chroma': 0,
            duration: 0.1,
            ease: 'none',
            scrollTrigger: {
              scrub: 0.2,
              trigger: 'ul',
              start: 'bottom center+=2lh',
              end: 'bottom center+=1lh',
            },
          },
        )
      }
    },
  },
}
</script>

<style scoped>
/* Ваши стили тут */
</style>
