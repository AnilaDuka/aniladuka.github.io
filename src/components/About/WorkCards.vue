<template>
  <div class="page">
    <h1 class="serviceIntro">
      Crafting High-Performance Web Solutions<br class="br" />
      with a Focus on User Experience
    </h1>
    <div class="cards">
      <div class="card">
        <img src="@/assets/images/dev.svg" alt="" />
        <h2>Web Development</h2>
        <p>{{ webDevelopment }}</p>
      </div>

      <div class="card">
        <img src="@/assets/images/dev.svg" alt="" />
        <h2>E-commerce</h2>
        <p>{{ ecommerce }}</p>
      </div>

      <div class="card">
        <img src="@/assets/images/dev.svg" alt="" />
        <h2>Seo</h2>
        <p>{{ seo }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      webDevelopment:
        'I create engaging web applications and websites to deliver seamless user experiences. My work focuses on building responsive and intuitive solutions tailored to meet client needs.',
      ecommerce:
        'I develop robust e-commerce solutions with platforms like Shopify. My focus is on creating streamlined, user-friendly online stores and implementing secure payment methods to drive sales.',
      seo: 'I optimize websites for better search engine visibility, improving rankings and user engagement. My approach ensures both new and existing sites perform at their best in search results.',
    };
  },
};
</script>

<style lang="scss" scoped>
.page {
  margin: 7% auto !important;
  width: 90%;
}
.cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
.card {
  width: 20%;
  padding: 20px;
  border-radius: 8px;
  color: rgb(47, 47, 47);
  font-size: 14px;
  text-align: left;
}
.serviceIntro {
  margin-bottom: 3%;
}

@media screen and (max-width: 700px) {
  .serviceIntro {
    margin: 15% 0%;
    font-size: 23px;
  }
  .br {
    display: none;
  }
  .cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .card {
    width: 70%;
    padding: 20px;
    border-radius: 8px;
    color: rgb(47, 47, 47);
    font-size: 14px;
    text-align: left;
  }
}
</style>
