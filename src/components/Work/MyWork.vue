<template>
  <div class="page">
    <div class="redirect">
      <router-link to="/">
        <span>{{ back }}</span>
      </router-link>
    </div>
    <div class="allProjects">
      <router-link
        v-for="project in projects"
        :to="project.route"
        :key="project.name"
        class="projectLink"
      >
        <div class="project">
          <img
            :src="project.thumbnail"
            :alt="project.name"
            class="projectImage"
          />
          <div class="projectContent">
            <h2 class="projectTitle">{{ project.name }}</h2>
            <p class="projectDescription">
              {{ truncateDescription(project.description) }}
            </p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { projects } from '@/projects';

export default {
  data() {
    return {
      back: 'Back to Home',
      projects,
    };
  },
  methods: {
    truncateDescription(description, wordLimit = 20) {
      if (!description) return '';
      const words = description.split(' ');
      if (words.length <= wordLimit) return description;
      return words.slice(0, wordLimit).join(' ') + '...';
    },
  },
};
</script>

<style scoped>
.page {
  width: 80%;
  margin: 5% auto;
}

.redirect {
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
}

.allProjects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.projectLink {
  text-decoration: none;
  color: inherit;
  width: calc(33.33% - 20px);
}

.project {
  display: flex;
  flex-direction: column;
  background: #f1f0ef;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 350px;
  margin-bottom: 2%;
}

.projectImage {
  width: 100%;
  height: auto;
  border-radius: 8px;
  flex-shrink: 0;
}

.projectContent {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.projectTitle {
  margin-top: 10px;
  font-size: 1.2em;
}

.projectDescription {
  margin: 10px 0;
}
</style>
