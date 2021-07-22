<template>
  <header>
    <div class="heartContainer">
      <img alt="Heart" src="./../assets/heart.png" />
    </div>
    <div class="nameContainer">
      <img alt="Lyanne Goto" src="./../assets/lyanne-goto.png" />
    </div>    
  </header>
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
</style>
