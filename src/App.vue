<template>
  <div id="app">
    <div class="grainy-background"></div>
    <div class="content">
      <NavBar />
      <router-view />
      <FooterMe />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue';
import FooterMe from './components/Footer/FooterMe.vue';

export default {
  components: { NavBar, FooterMe },
};
</script>

<style>
#app {
  font-family: 'Ortteco', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin: 0;
  background: #fbfbfb;
  position: relative;
}

.grainy-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://www.transparenttextures.com/patterns/asfalt-dark.png');
  animation: grain-animation 16s steps(10) infinite;
  opacity: 0.4;
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
}

@keyframes grain-animation {
  0%,
  100% {
    background-position: 0 0;
  }
  10% {
    background-position: 10px 10px;
  }
  20% {
    background-position: -10px 10px;
  }
  30% {
    background-position: 10px -10px;
  }
  40% {
    background-position: -10px -10px;
  }
  50% {
    background-position: 20px 20px;
  }
  60% {
    background-position: -20px 20px;
  }
  70% {
    background-position: 20px -20px;
  }
  80% {
    background-position: -20px -20px;
  }
  90% {
    background-position: 0px 0px;
  }
}

body {
  margin: 0;
}
</style>
