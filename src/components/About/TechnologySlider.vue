<template>
  <div class="slider">
    <Vue3Marquee>
      <img src="@/assets/images/HTML5.svg" alt="html" />
      <img src="@/assets/images/css3.svg" alt="css" />
      <img src="@/assets/images/javascript.svg" alt="javascript" />
      <img src="@/assets/images/vue.svg" alt="vue" />
      <img src="@/assets/images/react.svg" alt="react" />
      <img src="@/assets/images/shopify.svg" alt="shopify" />
      <img src="@/assets/images/figma.svg" alt="figma" />
      <img src="@/assets/images/cypress.svg" alt="cypress" />
      <img src="@/assets/images/tailwind.svg" alt="tailwind" />
      <img src="@/assets/images/aws.svg" alt="aws" />
      <img src="@/assets/images/bootstrap.svg" alt="bootstrap" />
    </Vue3Marquee>
  </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee';

export default {
  components: {
    Vue3Marquee,
  },
};
</script>

<style scoped>
.slider {
  width: 100%;
  margin-top: 10%;
  background: #f1f0ef;
  border-radius: 0px 0px 30px 30px;
  height: 170px;
  display: flex;
  align-items: center;
}
.slider img {
  margin-right: 110px;
}
</style>
