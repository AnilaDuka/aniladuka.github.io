<template>
  <div class="introductory">
    <div class="info">
      <img src="@/assets/images/profile.svg" alt="Profile" />
      <p>
        {{ greet }} <img src="@/assets/images/wave.svg" alt="wave" id="wave" />
      </p>
      <h1>{{ intro }}</h1>
    </div>
    <div class="work">
      <router-link to="/my-projects"
        ><button id="work">Latest Projects</button></router-link
      >
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
.work {
  display: flex;
  justify-content: center;
  margin-top: 3%;
}
.work a {
  text-decoration: none;
}
#work {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: black;
  border-radius: 50px;
  color: white;
  padding: 10px;
  width: 150px;
  height: 55px;
  font-size: 14px;
  font-weight: 700;
}
#work:hover {
  background-color: #333;
}

@media screen and (max-width: 700px) {
  .introductory {
    width: 80%;
    margin: auto;
    padding-top: 10%;
  }
  .info img {
    width: 40%;
    height: 100%;
  }
  .info {
    width: 90%;
    margin: 10% auto;
  }
  #wave {
    width: 5%;
  }
  .info h1 {
    font-size: 25px;
  }
  #work {
    width: 140px;
    height: 50px;
    font-size: 12px;
    font-weight: 700;
  }
}
</style>
