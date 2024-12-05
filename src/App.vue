<template>
  <div class="bg-[#2a2ecd] h-screen w-full">
    <div class="container mx-auto p-12">
      <CustomHeader />
      <ObmankaObiebka v-if="showObmankaObiebka" @close="closeObmakaObiebka" />
      <!-- <RotatingCubes v-if="showCubes" /> -->
      <div class="flex gap-5 mt-10 flex-wrap justify-center items-center">
        <RotatingCube /> <RotatingCube /> <RotatingCube /> <RotatingCube /> <RotatingCube />
        <RotatingCube /> <RotatingCube /> <RotatingCube /> <RotatingCube /> <RotatingCube />
        <RotatingCube /> <RotatingCube /> <RotatingCube /> <RotatingCube /> <RotatingCube />
      </div>
    </div>
  </div>
</template>

<script>
//import RotatingCubes from './components/RotatingCubes.vue'
import ObmankaObiebka from './components/ObmankaObiebka.vue'
import RotatingCube from './components/RotatingCube.vue'
import CustomHeader from './components/CustomHeader.vue'
export default {
  components: {
    //RotatingCubes,
    ObmankaObiebka,
    RotatingCube,
    CustomHeader,
  },
  data() {
    return {
      showObmankaObiebka: false,
      showCubes: true,
    }
  },
  mounted() {
    this.showObmankaObiebka = true
  },
  methods: {
    closeObmakaObiebka() {
      this.showObmankaObiebka = false
      this.showCubes = true
    },
  },
}
</script>

<style scoped></style>
