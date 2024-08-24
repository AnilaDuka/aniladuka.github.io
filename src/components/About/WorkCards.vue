<template>
  <div class="page">
    <h1>A Frontend developer...</h1>
    <div class="cards">
      <div class="card">
        <img src="@/assets/images/dev.svg" alt="" />
        <h2>Web Development</h2>
        <p>{{ webDevelopment }}</p>
        <button>View Work</button>
      </div>

      <div class="card">
        <img src="@/assets/images/dev.svg" alt="" />
        <h2>E-commerce</h2>
        <p>{{ ecommerce }}</p>
        <button>View Work</button>
      </div>

      <div class="card">
        <img src="@/assets/images/dev.svg" alt="" />
        <h2>Seo</h2>
        <p>{{ seo }}</p>
        <button>View Work</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      webDevelopment:
        'I create engaging web applications and websites using Vue.js to deliver seamless user experiences. My work focuses on building responsive and intuitive solutions tailored to meet client needs.',
      ecommerce:
        'I develop robust e-commerce solutions with platforms like Shopify. My focus is on creating streamlined, user-friendly online stores and implementing secure payment methods to drive sales.',
      seo: 'I optimize websites for better search engine visibility, improving rankings and user engagement. My approach ensures both new and existing sites perform at their best in search results.',
    };
  },
};
</script>

<style lang="scss" scoped>
.page {
  margin: 5% auto !important;
  width: 90%;
}
.cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
.card {
  width: 25%;
  padding: 20px;
  border-radius: 8px;
  color: black;
  font-size: 14px;
  text-align: left;

  button {
    border: none;
    background: rgb(116, 115, 115);
    border-radius: 6px;
    color: rgb(169, 169, 169);
    padding: 10px;
    width: 100px;
    height: 30px;
  }
}
</style>
