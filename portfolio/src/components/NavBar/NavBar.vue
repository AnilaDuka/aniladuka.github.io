<template>
  <nav>
    <div class="links">
      <router-link to="">
        <span>About me</span>
      </router-link>
      <router-link to="">
        <span>Experience</span>
      </router-link>
      <router-link to="">
        <span>My Work</span>
      </router-link>
    </div>
    <div>
      <router-link to="">
        <button class="contact">Contact</button>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
}
.links {
  display: flex;
  gap: 50px;
}
.links a {
  text-decoration: none;
  color: white;
}
.contact {
  width: 100px;
  height: 40px;
  background: white;
  color: black;
  padding: 10px;
  border-radius: 6px;
  font-size: 15px;
}
</style>
