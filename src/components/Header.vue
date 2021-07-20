<template>
  <header>
    <div class="heartContainer">
      <img alt="Heart" src="./../assets/heart.png">
    </div>
    <div class="nameContainer">
      <img alt="Lyanne Goto" src="./../assets/lyanne-goto.png">
    </div>
    <ul>
      <li><a href="https://instagram.com" target="_blank" rel="noopener">Início</a></li>
      |
      <li><a href="https://instagram.com" target="_blank" rel="noopener">Sobre mim</a></li>
      |
      <li><a href="https://instagram.com" target="_blank" rel="noopener">Dúvidas</a></li>
      |
      <li><a href="https://instagram.com" target="_blank" rel="noopener">Ensaios</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.heartContainer {
  margin: 0 auto;
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
