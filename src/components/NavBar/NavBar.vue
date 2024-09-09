<template>
  <nav>
    <div class="links">
      <a href="/AnilaDukaCV.pdf" target="_blank"
        ><button class="cv">CV</button></a
      >
      <a href="mailto: aniladukaa@gmail.com">
        <span>aniladukaa@gmail.com</span>
      </a>
    </div>
    <div class="links socials">
      <a href="https://www.linkedin.com/in/anila-duka/" target="_blank"
        >Linkedin</a
      >
      <a href="https://github.com/AnilaDuka" target="_blank">GitHub</a>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
}
.links {
  display: flex;
  align-items: center;
  gap: 50px;
}
.links a {
  text-decoration: none;
  color: black;
}
.cv {
  border-radius: 50px;
  height: 40px;
  width: 100px;
  background: black;
  color: white;
  border: none;
}

@media screen and (max-width: 700px) {
  nav {
    padding: 5% 2%;
  }
  .cv {
    width: 75px;
    height: 35px;
  }
  .socials {
    display: none;
  }
}
</style>
