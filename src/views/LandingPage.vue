<template>
  <div class="home">
    <AboutMe />
    <TechnologySlider />
    <WorkCards />
    <ContactMe />
  </div>
</template>

<script>
import AboutMe from '@/components/About/AboutMe.vue';
import TechnologySlider from '@/components/About/TechnologySlider.vue';
import WorkCards from '@/components/About/WorkCards.vue';
import ContactMe from '@/components/About/ContactMe.vue';

export default {
  components: {
    AboutMe,
    TechnologySlider,
    WorkCards,
    ContactMe,
  },
  mounted() {
    const projectSlug = this.$route.query.project;
    if (projectSlug) {
      this.$router.replace({ path: `/projects/${projectSlug}` });
    }
  }
};
</script>

<style scoped>
.home {
  opacity: 1;
}
</style>
