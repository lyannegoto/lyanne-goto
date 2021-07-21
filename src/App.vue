<template>
  <Header />
  <ul>
    <router-link to="/inicio">Início</router-link>
    |
    <router-link to="/sobre-mim">Sobre Mim</router-link>
    |
    <router-link to="/duvidas">Dúvidas</router-link>
    |
    <router-link to="/ensaios">Ensaios</router-link>
  </ul>

  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  text-decoration: none;
}
</style>
