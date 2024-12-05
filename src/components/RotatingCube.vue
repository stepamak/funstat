<template>
  <div class="flex flex-col gap-4">
    <div id="cube-wrapper" class="relative w-48 h-48 perspective-1000">
      <div
        ref="cube"
        class="absolute w-full h-full transform-style-preserve-3d transition-transform duration-500"
        :style="{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }"
      >
        <div
          class="face absolute w-full h-full bg-[#0c8ce9] text-gray-800 font-bold flex items-center justify-center border border-gray-300"
          style="transform: rotateY(0deg) translateZ(6rem)"
        >
          DRUGNDROPO
        </div>
        <div
          class="face absolute w-full h-full bg-[#0c8ce9] text-gray-800 font-bold flex items-center justify-center border border-gray-300"
          style="transform: rotateY(180deg) translateZ(6rem)"
        >
          DRUGNDROPO
        </div>
        <div
          class="face absolute w-full h-full bg-[#0c8ce9] text-gray-800 font-bold flex items-center justify-center border border-gray-300"
          style="transform: rotateY(-90deg) translateZ(6rem)"
        >
          DRUGNDROPO
        </div>
        <div
          class="face absolute w-full h-full bg-[#0c8ce9] text-gray-800 font-bold flex items-center justify-center border border-gray-300"
          style="transform: rotateY(90deg) translateZ(6rem)"
        >
          DRUGNDROPO
        </div>
        <div
          class="face absolute w-full h-full bg-[#0c8ce9] text-gray-800 font-bold flex items-center justify-center border border-gray-300"
          style="transform: rotateX(90deg) translateZ(6rem)"
        >
          Top
        </div>
        <div
          class="face absolute w-full h-full bg-[#0c8ce9] text-gray-800 font-bold flex items-center justify-center border border-gray-300"
          style="transform: rotateX(-90deg) translateZ(6rem)"
        >
          Bottom
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RotatingCube',
  data() {
    return {
      rotateX: 0,
      rotateY: 0,
    }
  },
  mounted() {
    const cube = this.$refs.cube
    let isDragging = false
    let startX,
      startY,
      currentX = 0,
      currentY = 0

    const onMouseMove = (event) => {
      if (!isDragging) return
      const deltaX = event.clientX - startX
      const deltaY = event.clientY - startY
      this.rotateY = currentY + deltaX / 2
      this.rotateX = currentX - deltaY / 2
    }

    const onMouseDown = (event) => {
      isDragging = true
      startX = event.clientX
      startY = event.clientY
      currentX = this.rotateX
      currentY = this.rotateY
      document.addEventListener('mousemove', onMouseMove)
    }

    const onMouseUp = () => {
      isDragging = false
      document.removeEventListener('mousemove', onMouseMove)
    }

    cube.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
  },
}
</script>
