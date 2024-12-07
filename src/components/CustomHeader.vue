<template>
  <header class="flex items-center w-full justify-between border-[1px] p-0 mb-[21%]">
    <!-- Элемент для кастомного курсора -->
    <div class="cursor"></div>

    <div class="logo ml-8 link">
      <img src="/assets/logo.svg" alt="Logo" class="w-full h-full" />
    </div>
    <div class="flex items-center gap-12 mr-14 text-[32px] link">
      <div class="text-white leading-6 font-normal flex gap-5 cursor-pointer">
        <span>About</span>
        <!-- Добавим span для анимации -->
      </div>
      <div class="text-white leading-6 font-normal flex gap-5 cursor-pointer">
        <span>Docs</span>
        <!-- Добавим span для анимации -->
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
  mounted() {
    this.addCursorEffect()
  },
  methods: {
    addCursorEffect() {
      const link = this.$el.querySelectorAll('.link')
      const cursor = this.$el.querySelector('.cursor')

      // Анимация для элементов с классом 'link'
      const animateit = function (e) {
        const span = this.querySelector('span')
        const { offsetX: x, offsetY: y } = e
        const { offsetWidth: width, offsetHeight: height } = this

        const move = 25
        const xMove = (x / width) * (move * 2) - move
        const yMove = (y / height) * (move * 2) - move

        span.style.transform = `translate(${xMove}px, ${yMove}px)`

        if (e.type === 'mouseleave') span.style.transform = ''
      }

      // Обновление позиции кастомного курсора
      const editCursor = (e) => {
        const { clientX: x, clientY: y } = e
        cursor.style.left = x + 'px'
        cursor.style.top = y + 'px'
      }

      link.forEach((b) => b.addEventListener('mousemove', animateit))
      link.forEach((b) => b.addEventListener('mouseleave', animateit))
      window.addEventListener('mousemove', editCursor)
    },
  },
}
</script>

<style scoped>
.link {
  transition: all 0.3s ease;
}

.link span {
  display: inline-block;
  font-weight: bold;
  letter-spacing: 1px;
  color: #fff;
  font-size: 36px;
  text-transform: uppercase;
  pointer-events: none;
  transition: transform 0.1s linear;
}

.cursor {
  pointer-events: none;
  position: fixed;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  mix-blend-mode: difference;
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease;
}

.link:hover ~ .cursor {
  transform: translate(-50%, -50%) scale(8);
}
</style>
