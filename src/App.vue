<template>
  <div class="h-screen w-full">
    <CustomHeader />
    <!-- <ObmankaObiebka v-if="showObmankaObiebka" @close="showObmankaObiebka = false"/> -->
    <!-- <ScrollSection :delay="0.5" :y="300">
      <AboutProject />
    </ScrollSection>
    <CardSection /> -->
    <TokenContent />
    <FixedFooter />
  </div>
</template>

<script>
// import RotatingCubes from './components/RotatingCubes.vue'
import ObmankaObiebka from './components/ObmankaObiebka.vue'
import FixedFooter from './components/FixedFooter.vue'
//import RotatingCube from './components/RotatingCube.vue'
import CustomHeader from './components/CustomHeader.vue'
import AboutProject from './components/AboutProject.vue'
import ScrollSection from './components/ScrollSection.vue'
import CardSection from './components/CardSection.vue'
import TokenContent from './components/TokenContent.vue'
export default {
  components: {
    // RotatingCubes,
    ObmankaObiebka,
    // RotatingCube,
    CustomHeader,
    FixedFooter,
    AboutProject,
    ScrollSection,
    CardSection,
    TokenContent,
  },
  data() {
    return {
      showObmankaObiebka: false,
      showCubes: true,
      showAbout: false,
    }
  },
  mounted() {
    this.addCursorEffect()
    this.addLinkHoverEffect()
    this.showObmankaObiebka = true
  },
  methods: {
    closeObmakaObiebka() {
      this.showObmankaObiebka = false
      this.showCubes = true
      this.showAbout = true
    },
    addCursorEffect() {
      const cursor = document.querySelector('.cursor')

      const editCursor = (e) => {
        const { clientX: x, clientY: y } = e
        cursor.style.left = `${x}px`
        cursor.style.top = `${y}px`
      }

      window.addEventListener('mousemove', editCursor)
    },
    // Добавляем анимацию для всех ссылок с классом .link
    addLinkHoverEffect() {
      const links = document.querySelectorAll('.link')

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

      links.forEach((b) => b.addEventListener('mousemove', animateit))
      links.forEach((b) => b.addEventListener('mouseleave', animateit))
    },
  },
}
</script>

<style scoped>
/* Глобальные стили для курсора */
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

/* Стили для ссылок или элементов, которые будут анимировать курсор */
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

.link:hover ~ .cursor {
  transform: translate(-50%, -50%) scale(8);
}
</style>
