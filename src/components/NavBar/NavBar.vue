<template>
  <nav>
    <div class="links">
      <a href="/Anila Duka - CV.pdf"><button class="cv">CV</button></a>
      <a href="mailto: aniladukaa@gmail.com">
        <span>aniladukaa@gmail.com</span>
      </a>
    </div>
    <div @click="scrollToContact">
      <button class="cv">Contact</button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    scrollToContact() {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
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
  background: white;
}
</style>
