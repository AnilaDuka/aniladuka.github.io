<template>
  <div class="introductory">
    <div class="info">
      <img src="@/assets/images/profile.svg" alt="Profile" />
      <h1>{{ intro }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intro: "Hello! I'm Anila. A Frontend Developer based in Prishtina",
    };
  },
};
</script>

<style scoped>
.introductory {
  width: 80%;
  margin: auto;
  padding-top: 4%;
}
.info {
  width: 40%;
  margin: auto;
}
.info img {
  width: 20%;
  height: 100%;
}
.info h1 {
  font-size: 37px;
}
</style>
