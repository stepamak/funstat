<template>

  <body class="bg-[#2a2ecd] h-screen w-full pt-[64px]">
    <CustomHeader />
    <!-- <ObmankaObiebka v-if="showObmankaObiebka" @close="showObmankaObiebka = false"/> -->
    <ScrollSection :delay="0.5" :y="300">
      <AboutProject />
    </ScrollSection>
    <CardSection />
    <FixedFooter />
  </body>
</template>

<script>
// import RotatingCubes from './components/RotatingCubes.vue'
import ObmankaObiebka from './components/ObmankaObiebka.vue'
import FixedFooter from './components/FixedFooter.vue';
//import RotatingCube from './components/RotatingCube.vue'
import CustomHeader from './components/CustomHeader.vue'
import AboutProject from './components/AboutProject.vue';
import ScrollSection from './components/ScrollSection.vue';
import TokenContent from './components/TokenContent.vue';
import CardSection from './components/CardSection.vue';
export default {
  components: {
    // RotatingCubes,
    ObmankaObiebka,
    // RotatingCube,
    CustomHeader,
    FixedFooter,
    AboutProject,
    ScrollSection,
    TokenContent,
    CardSection
  },
  data() {
    return {
      showObmankaObiebka: false,
      showCubes: true,
      showAbout: false
    }
  },
  mounted() {
    this.showObmankaObiebka = true
  },
  methods: {
    closeObmakaObiebka() {
      this.showObmankaObiebka = false
      this.showCubes = true
      this.showAbout = true
    },
  },
}
</script>

<style scoped></style>
