<template>
  <div class="cursor"></div>
</template>

<script>
export default {
  mounted() {
    // Обработчик движения мыши
    window.addEventListener('mousemove', this.handleMouseMove)
  },
  unmounted() {
    // Убираем обработчик при уничтожении компонента
    window.removeEventListener('mousemove', this.handleMouseMove)
  },
  methods: {
    handleMouseMove(event) {
      const cursor = document.querySelector('.cursor')
      cursor.style.left = `${event.clientX}px`
      cursor.style.top = `${event.clientY}px`
    },
  },
}
</script>

<style scoped>
.cursor {
  pointer-events: none;
  position: fixed;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  transition: transform 0.3s ease;
}
</style>
