<template>
  <div class="page">
    <div class="redirect">
      <router-link to="/">{{ home }}</router-link>
      <router-link to="/my-projects"><span>Projects</span></router-link>
    </div>
    <div class="projectContainer">
      <div class="projectSlides">
        <carousel :items-to-show="1">
          <slide v-for="(image, index) in projects[0].images" :key="index">
            <img :src="image" :alt="'Slide ' + (index + 1)" />
          </slide>
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
      <div class="projectDetails">
        <h1>{{ projects[0].name }}</h1>
        <p>{{ projects[0].description }}</p>
        <a href="https://handmadedresses.no/" target="_blank"
          >handmadedresses.no</a
        >
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
      projects: projects.filter(
        (project) => project.name === 'Handmade Dresses E-commerce'
      ),
    };
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
