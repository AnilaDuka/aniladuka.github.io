<template>
  <div class="home">
    <AboutMe />
    <TechnologySlider />
    <WorkCards />
  </div>
</template>

<script>
import AboutMe from '@/components/About/AboutMe.vue';
import TechnologySlider from '@/components/About/TechnologySlider.vue';
import WorkCards from '@/components/About/WorkCards.vue';

export default {
  components: {
    AboutMe,
    TechnologySlider,
    WorkCards,
  },
};
</script>

<style scoped>
.home {
  opacity: 1;
}
</style>
