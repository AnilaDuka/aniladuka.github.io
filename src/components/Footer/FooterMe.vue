<template>
  <footer>
    <div class="footerContent">
      <div class="copyright">
        <span>© 2024 All rights reserved.</span>
      </div>
      <div class="links">
        <a href="https://www.linkedin.com/in/anila-duka/" target="_blank"
          >Linkedin</a
        >
        <a href="https://github.com/AnilaDuka" target="_blank">GitHub</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  height: 150px;
  background: #f1f0ef;
  border-radius: 40px 40px 0px 0px;
}
.footerContent {
  width: 90%;
  height: 100%;
  margin: auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.links {
  display: flex;
  gap: 30px;
}
.links a {
  text-decoration: none;
  color: black;
}
</style>
