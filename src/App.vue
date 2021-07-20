<template>
  <Header />
  <Duvidas />
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Duvidas from './components/Duvidas.vue'
//import SobreMim from './components/SobreMim.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Duvidas,
    //SobreMim,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
