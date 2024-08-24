<template>
  <div class="introductory">
    <div class="info">
      <img src="@/assets/images/profile.svg" alt="Profile" />
      <p>
        {{ greet }} <img src="@/assets/images/wave.svg" alt="wave" id="wave" />
      </p>
      <h1>{{ intro }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greet: "Hi, I'm Anila",
      intro: 'Designing and developing the web, one pixel at a time.',
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
#wave {
  width: 2.5%;
}
</style>
