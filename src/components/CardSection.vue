<template>
  <div class="cards-container">
    <div class="card">
      <div class="card-content">
        <h3>{{ card.name }}</h3>
        <p>{{ card.address }}</p>
        <p>{{ card.market_cap }}</p>
        <p>{{ card.holder }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap/gsap-core';
import { useTokenStore } from '../stores/tokenStore';
export default {
  name: "CardSection",
  setup() {
    return {
      tokenStore: useTokenStore()
    }
  },
  data() {
    return {
      card: {},
    };
  },
  mounted() {
    this.animateCard()
  },
  methods: {
    async animateCard() {
      const card = this.$refs[`card`];
      await this.tokenStore.getFirstToken()
      this.card = this.tokenStore.firstToken
      console.log(this.cards)
      if (card) {
        gsap.to(card, {
          keyframes: {
            y: [0, 80, -10, 30, 0],
            ease: "none",
            easeEach: "power2.inOut"
          },
          rotate: 360,
          ease: "elastic",
          duration: 5,
          stagger: 0.2
        });

      }
    },
  },
};
</script>

<style scoped>
.cards-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: nowrap;
}

.card {
  width: 450px;
  height: 350px;
  background: #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  opacity: 1;
}

.card-content {
  text-align: center;
}

.card h3 {
  margin: 10px 0;
  font-size: 1.5rem;
}

.card p {
  font-size: 1rem;
  color: #666;
}
</style>