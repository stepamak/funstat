<template>
  <div ref="sceneWrapper" class="h-screen overflow-hidden">
    <div ref="sceneContainer" class="w-full h-screen"></div>
  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'RotatingCubes',
  data() {
    return {
      isRotationComplete: false,
      rotationProgress: 0,
      maxRotation: Math.PI * 2,
    }
  },
  mounted() {
    this.initThree()
    this.addCubes()
    this.animate = this.animate.bind(this)
    this.animate()

    window.addEventListener('wheel', this.handleWheel, { passive: false })
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('wheel', this.handleWheel)
    window.removeEventListener('resize', this.handleResize)
    cancelAnimationFrame(this.animationFrameId)
    this.renderer.dispose()
    this.cubes.forEach((cube) => {
      cube.geometry.dispose()
      cube.material.dispose()
    })
    this.scene.dispose()
  },
  methods: {
    initThree() {
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color('#2a2ecd')

      const aspect = window.innerWidth / window.innerHeight
      this.camera = new THREE.PerspectiveCamera(60, aspect, 1, 1000)
      this.camera.position.z = 5

      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.$refs.sceneContainer.appendChild(this.renderer.domElement)
    },
    addCubes() {
      this.cubes = []
      const geometry = new THREE.BoxGeometry(2, 2, 2)
      const textTexture = this.createTextTexture('текст с апи')

      const material = new THREE.MeshBasicMaterial({
        map: textTexture,
        color: '#a09a9e',
        side: THREE.DoubleSide,
      })

      const distanceBetweenCubes = 3.5

      for (let i = -1; i <= 1; i++) {
        const cube = new THREE.Mesh(geometry, material)
        cube.position.x = i * distanceBetweenCubes
        this.scene.add(cube)
        this.cubes.push(cube)
        cube.lookAt(this.camera.position)
      }

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(1, 1, 1).normalize()
      this.scene.add(directionalLight)

      const ambientLight = new THREE.AmbientLight(0x404040, 0.5)
      this.scene.add(ambientLight)

      const pointLight = new THREE.PointLight(0xffffff, 1, 100)
      pointLight.position.set(0, 5, 5)
      this.scene.add(pointLight)

      const lightHelper = new THREE.PointLightHelper(pointLight, 0.5)
      this.scene.add(lightHelper)
    },
    animate() {
      this.renderer.render(this.scene, this.camera)
      this.animationFrameId = requestAnimationFrame(this.animate)
    },
    handleWheel(event) {
      event.preventDefault()

      this.rotationProgress += event.deltaY * 0.001

      this.cubes.forEach((cube, index) => {
        cube.rotation.y = this.rotationProgress * (index + 1)
      })

      if (this.rotationProgress >= this.maxRotation) {
        this.isRotationComplete = true
      }
    },
    handleResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    },

    createTextTexture(text) {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')

      const size = 512
      canvas.width = size
      canvas.height = size

      context.fillStyle = '#FFFFFF'
      context.fillRect(0, 0, size, size)

      context.fillStyle = '#000000'
      context.font = '48px Arial'
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      context.fillText(text, size / 2, size / 2)

      const texture = new THREE.CanvasTexture(canvas)
      texture.needsUpdate = true
      return texture
    },
  },
}
</script>

<style scoped>
body {
  overflow: hidden;
}
</style>
