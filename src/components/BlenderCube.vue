<template>
  <div ref="threeContainer" class="three-container"></div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default {
  name: "ThreeModel",
  mounted() {
    this.initThree();
  },
  methods: {
    initThree() {
      // Контейнер
      const container = this.$refs.threeContainer;

      // Сцена, камера, рендерер
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      // Свет
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(5, 5, 5);
      scene.add(light);

      // Загрузка модели
      const loader = new GLTFLoader();
      loader.load(
        "/assets/blender/rubiks_cube.glb", // Укажи путь к твоей модели
        (gltf) => {
          const model = gltf.scene;
          model.position.set(0, 0, 0); // Настройка позиции
          scene.add(model);
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + "% загружено");
        },
        (error) => {
          console.error("Ошибка загрузки модели:", error);
        }
      );

      // Камера
      camera.position.z = 5;

      // Анимация
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();

      // Обработка ресайза окна
      window.addEventListener("resize", () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      });
    },
  },
};
</script>

<style>
.three-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
