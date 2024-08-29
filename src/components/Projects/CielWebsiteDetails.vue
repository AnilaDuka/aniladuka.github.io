<template>
  <div class="page">
    <div class="redirect">
      <router-link to="/">{{ home }}</router-link>
      <router-link to="/my-projects"><span>Projects</span></router-link>
    </div>
    <!-- Only render projectContainer if project is loaded -->
    <div class="projectContainer" v-if="project">
      <div class="projectSlides">
        <carousel :items-to-show="1" v-if="projectImages.length">
          <slide v-for="(image, index) in projectImages" :key="index">
            <img :src="image" :alt="`Slide ${index + 1}`" />
          </slide>
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
      <div class="projectDetails">
        <h1>{{ project.name }}</h1>
        <p>{{ project.description }}</p>
        <p>In progress...</p>
      </div>
    </div>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { projects } from '@/projects';

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      home: 'Home < ',
      project: projects.find(
        (project) => project.name === 'Ciel De Beaute Website'
      ),
    };
  },
  computed: {
    projectImages() {
      return this.project && this.project.image ? [this.project.image] : [];
    },
  },
};
</script>

<style scoped>
.page {
  width: 90%;
  margin: 4% auto;
}

.projectContainer {
  display: flex;
  gap: 50px;
}

.redirect {
  display: flex;
  width: 90%;
  justify-content: flex-start;
}

.projectSlides {
  width: 60%;
}

.projectDetails {
  width: 50%;
  text-align: left;
  line-height: 1.7em;
}

img {
  width: 100%;
  height: fit-content;
  display: block;
}
</style>
