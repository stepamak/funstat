<template>
  <div class="bg-[#2a2ecd] h-full w-full pt-[64px]">
    <CustomHeader />
    <!-- <ObmankaObiebka v-if="showObmankaObiebka" @close="closeObmakaObiebka" /> -->
    <!-- <RotatingCubes v-if="showCubes" /> -->
     <BlenderCube />
    <div class="flex justify-center items-center w-[90%]">
      <FixedFooter />
    </div>
  </div>
</template>

<script>
import RotatingCubes from './components/RotatingCubes.vue'
import BlenderCube from './components/BlenderCube.vue';
import ObmankaObiebka from './components/ObmankaObiebka.vue'
import FixedFooter from './components/FixedFooter.vue';
//import RotatingCube from './components/RotatingCube.vue'
import CustomHeader from './components/CustomHeader.vue'
export default {
  components: {
    BlenderCube,
    //RotatingCubes,
    // ObmankaObiebka,
    // RotatingCube,
    CustomHeader,
    FixedFooter
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
