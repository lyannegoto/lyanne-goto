<template>
  <header>
    <div class="heartContainer">
      <img alt="Heart" src="./../assets/heart.png" />
    </div>
    <div class="nameContainer">
      <img alt="Lyanne Goto" src="./../assets/lyanne-goto.png" />
    </div>
    <ul>
      <router-link to="/Inicio">Início</router-link>
      |
      <router-link to="/SobreMim">Sobre Mim</router-link>
      |
      <router-link to="/Duvidas">Dúvidas</router-link>
      |
      <router-link to="/Ensaios">Ensaios</router-link>
    </ul>
  </header>

  <router-view></router-view>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.heartContainer {
  margin: 50px auto 0;
  width: 5%;
}

.nameContainer {
  margin: 40px auto 5px;
  width: 30%;
}

img {
  object-fit: fill;
  width: 100%;
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
  color: #42b983;
}
</style>
