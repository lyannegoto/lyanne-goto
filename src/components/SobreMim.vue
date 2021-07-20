<template>
  <div>
    <div class="pictureContainer">
      <img alt="Lyanne" src="./../assets/lyanne.png">
    </div>
    <p>
      Um pouco de design, cores e muita fotografia. Oie, meu nome é Lyanne, sou
      formada em Design de Interiores mas sempre tive grande parte do meu
      coração voltado para a fotografia. Comecei a amar essa profissão aos 13
      anos e sempre tive a certeza de que algum dia trabalharia em tempo
      integral com isso! Meu objetivo é alcançar o maior número de famílias com
      muitas crianças lindas e poder eternizar essa fase tão incrível através do
      meu trabalho.
    </p>
  </div>
</template>

<script>
export default {
  name: "SobreMim",
};
</script>

<style scoped>
.section-selfie {
  height: 300px;
  padding: 25px;
}

.section-selfie div {
  display: flex;
  justify-content: center;
  height: 100%;
}

.section-selfie div img {
  height: 100%;
  object-fit: cover;
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: var(--custom-grey);
}

.text p {
  margin: 0;
}

.text p span {
  color: var(--custom-grey-bold);
}

.paragraph {
  height: 30px;
}

</style>
