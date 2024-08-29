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
        <p>{{ addition }}</p>
        <a href="https://www.digitbusiness.ch/" target="_blank"
          >www.digitbusiness.ch</a
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
      addition: `In addition to the development, I focused on optimizing the website's SEO. This included adding meta tags and descriptions that align with SEO best practices, and creating a sitemap.xml to improve search engine indexing. My efforts in these areas have contributed to better visibility and performance of the website in search engines. Overall, the project showcases a comprehensive approach to web development, from design implementation to functionality and SEO optimization.`,
      project: projects.find((project) => project.name === 'DigIT Website'),
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
