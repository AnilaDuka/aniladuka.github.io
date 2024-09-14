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

<style lang="scss" scoped>
footer {
  height: 150px;
  background: #f1f0ef;
  border-radius: 40px 40px 0 0;

  .footerContent {
    width: 90%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .links {
      display: flex;
      gap: 30px;

      a {
        text-decoration: none;
        color: black;
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .footerContent {
    width: 95%;
    flex-direction: column-reverse;

    .links {
      margin-top: 30px;
    }

    .copyright {
      margin-bottom: 10px;
    }
  }
}
</style>
