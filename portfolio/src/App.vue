<template>
  <div id="app">
    <NavBar />
    <div id="particles-wrapper">
      <vue-particles
        color="#eb3486"
        :particleOpacity="0.8"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#eb3486"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      />
    </div>
    <div id="content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue';

export default {
  components: { NavBar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(255, 255, 255, 0.768);
  margin: 0;
  background: black;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

#particles-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

#content-wrapper {
  position: relative;
  z-index: 2;
  padding: 20px;
}

body {
  margin: 0;
}
</style>
