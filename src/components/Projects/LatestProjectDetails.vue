<template>
  <div class="page">
    <div class="redirect">
      <router-link to="/">{{ home }}</router-link>
      <router-link to="/my-projects"><span>Projects</span></router-link>
    </div>
    <div class="projectContainer" v-if="project">
      <div class="projectSlides" v-if="projectSlides.length">

        <video
          v-if="projectSlides.length === 1 && isVideo(projectSlides[0])"
          :src="projectSlides[0]"
          controls
          style="width: 100%; max-height: 400px; object-fit: contain;"
        ></video>
      
        <swiper
          v-else
          :modules="[Navigation, Pagination]"
          :style="{'--swiper-navigation-color': '#000'}"
          :slides-per-view="1"
          :pagination="{ clickable: true }"
          :navigation="true"
          :centered-slides="true"
        >
          <swiper-slide v-for="(slide, index) in projectSlides" :key="slide + '-' + index">
            <video
              v-if="isVideo(slide)"
              :src="slide"
              controls
              style="width: 100%; max-height: 400px; object-fit: contain;"
            ></video>
            <img
              v-else
              :src="slide"
              :alt="'Slide ' + (index + 1)"
              style="width: 100%; max-height: 400px; object-fit: contain;"
            />
          </swiper-slide>
        </swiper>
      
      </div>
      <div class="projectDetails">
        <h1>{{ project.name }}</h1>
        <p style="white-space: pre-line">{{ project.description }}</p>
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
  data() {
    return {
      home: 'Home < ',
      project: null,
      Navigation,
      Pagination,
    };
  },
  computed: {
    projectSlides() {
      if (!this.project) return [];
      let slides = [];

      if (Array.isArray(this.project.images)) {
        slides = [...this.project.images];
      } else if (this.project.images) {
        slides = [this.project.images];
      }

      if (this.project.video && typeof this.project.video === 'string') {
        slides.push(this.project.video);
      }

      return slides;
    },
  },
  created() {
    this.project = projects.find(
      (project) => project.slug === this.$route.params.slug
    );
  },
  methods: {
    isVideo(slide) {
      return typeof slide === 'string' && slide.endsWith('.mp4');
    },
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
