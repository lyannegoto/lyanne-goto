<template class="inicio">
  <div class="carrousel-container">
  </div>

  <div class="flower-message-container">
    <div class="flower-container">
      <img alt="Flower" src="./../assets/flower.png" />
    </div>
    <div class="message-container">
      <p>
        Em busca de ter meu próprio estúdio para continuar registrando os
        melhores sorrisos da sua família.
      </p>
    </div>
  </div>

  <div class="phrase-container">
    <img
      alt="Famílias, muitos sorrisos e luz natural"
      src="./../assets/frase.png"
    />
  </div>

  <div class="instagram-message-container">
    <p>
      Vem acompanhar ainda mais de perto o nosso trabalho.
    </p>
    <p>
      Aqui no instagram você fica sabendo de cada detalhe dos processos de
      edição e entregas!
    </p>
  </div>
</template>

<script>
export default {
  name: "Inicio",
};
</script>

<style scoped>
.flower-message-container {
  margin-bottom: 100px;
  display: inline-flex;
  align-items: center;
  height: 300px;
  width: 65%;
}

.flower-container {
  height: 100%;
  min-width: 25%;
}

.flower-container img {
  object-fit: fill;
  height: 100%;
  width: 100%;
}

.message-container {
  margin-left: 10%;
  border-left: 1px solid var(--custom-grey);
  padding-left: 3%;
  width: 75%;
}

p {
  text-align: left;
  line-height: 1.5;
}

.phrase-container {
  margin-bottom: 100px;
  display: inline-flex;
  align-items: center;
  width: 75%;
}

.phrase-container img {
  object-fit: fill;
  height: 100%;
  width: 100%;
}

.instagram-message-container {
  display: inline-flex;
}
</style>
