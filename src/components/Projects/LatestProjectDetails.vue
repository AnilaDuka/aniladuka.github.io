<template>
  <div class="page">
    <div class="redirect">
      <router-link to="/">{{ home }}</router-link>
      <router-link to="/my-projects"><span>Projects</span></router-link>
    </div>
    <div class="projectContainer" v-if="project">
      <div class="projectSlides" v-if="projectImages.length">
        <swiper
          :modules="[Navigation, Pagination]"
          :style="{
            '--swiper-navigation-color': '#000',
          }"
          v-if="projectImages.length > 1"
          :slides-per-view="1"
          :pagination="{ clickable: true }"
          :navigation="true"
          :centered-slides="true"
        >
          <swiper-slide v-for="(image, index) in projectImages" :key="index">
            <img :src="image" :alt="'Slide ' + (index + 1)" />
          </swiper-slide>
        </swiper>
        <div v-else>
          <img :src="projectImages[0]" alt="Project Image" />
        </div>
      </div>
      <div class="projectDetails">
        <h1>{{ project.name }}</h1>
        <p>{{ project.description }}</p>
        <div v-if="project.name === 'Spim SaaS'">
          <p>{{ keyRequirements }}</p>
          <p>{{ development }}</p>
          <p>{{ quality }}</p>
          <p>{{ deployment }}</p>
        </div>
        <div v-if="project.name === 'DigIT Website'">
          <p>{{ addition }}</p>
        </div>
        <a :href="project.link" target="_blank">{{ project.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import { projects } from '@/projects';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      Navigation,
      Pagination,
    };
  },
  data() {
    return {
      home: 'Home < ',
      project: null,
      addition: `In addition to the development, I focused on optimizing the website's SEO. This included adding meta tags and descriptions that align with SEO best practices, and creating a sitemap.xml to improve search engine indexing. My efforts in these areas have contributed to better visibility and performance of the website in search engines. Overall, the project showcases a comprehensive approach to web development, from design implementation to functionality and SEO optimization.`,
      keyRequirements: 'Key responsibilities and achievements included:',
      development:
        'Feature Development: I designed and implemented new features for SPIM Fashion, closely aligning with client requirements to enhance the platform’s functionality and user experience.',
      quality:
        'Quality Assurance: I wrote and executed comprehensive tests using Cypress to ensure the reliability and performance of new features. This testing process was crucial in maintaining high-quality standards and preventing issues before deployment.',
      deployment:
        'Deployment: I managed the end-to-end deployment of new features, ensuring seamless integration and smooth operation in the live environment.',
    };
  },
  computed: {
    projectImages() {
      if (this.project) {
        if (Array.isArray(this.project.images)) {
          return this.project.images;
        } else if (this.project.images) {
          return [this.project.images];
        }
      }
      return [];
    },
  },
  created() {
    this.project = projects.find(
      (project) => project.slug === this.$route.params.slug
    );
  },
};
</script>

<style scoped lang="scss">
.page {
  width: 90%;
  margin: 5.5% auto;
}
.projectContainer {
  display: flex;
  gap: 50px;
}
.redirect {
  display: flex;
  width: 90%;
  justify-content: flex-start;
  margin: 30px 0px;
}
.projectSlides {
  width: 60%;
}
.projectDetails {
  width: 50%;
  text-align: left;
  line-height: 1.7em;
}
.projectDetails p {
  font-size: 16px;
}
img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.projectSlides {
  width: 60%;
  position: relative;
}

.projectSlides img {
  max-height: 100%;
}

h1 {
  margin: 0px;
}

@media screen and (max-width: 1200px) {
  .projectContainer {
    display: flex;
    flex-direction: column;
  }
  .projectSlides {
    width: 100%;
    height: auto;
  }
  .projectDetails {
    width: 100%;
    text-align: left;
    line-height: 1.7em;
    margin-bottom: 30px;
  }
  .redirect {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin: 30px 0px;
  }
  .projectDetails p {
    font-size: 14px;
  }
  .projectDetails h1 {
    font-size: 22px;
  }
}
</style>
