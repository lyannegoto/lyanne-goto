<template class="inicio">
  <div class="carrousel-container"></div>

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
    <div class="empty-container" />
    <div class="instagram-container">
      <p>@lyannegoto</p>
      <iframe
        src="https://snapwidget.com/embed/946615"
        class="snapwidget-widget"
        allowtransparency="true"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
    <div class="message-container">
      <p>
        Aqui no instagram você fica sabendo de cada detalhe dos processos de
        edição e entregas!
      </p>
      <p>
        Vem acompanhar ainda mais de perto o nosso trabalho.
      </p>
    </div>
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

.flower-message-container .flower-container {
  height: 100%;
  min-width: 25%;
}

.flower-message-container .flower-container img {
  object-fit: fill;
  height: 100%;
  width: 100%;
}

.flower-message-container .message-container {
  margin-left: 10%;
  border-left: 1px solid var(--custom-grey);
  padding-left: 3%;
  width: 75%;
}

.flower-message-container .message-container p {
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
  width: 50%;
  height: 300px;
}

.instagram-message-container .empty-container {
  margin: auto;
  width: 35%;
}

.instagram-message-container .instagram-container .snapwidget-widget {
  height: auto;
}

.instagram-message-container .message-container {
  display: flex;
  flex-direction: column-reverse;
  margin: auto;
  width: 35%;
}

.instagram-message-container .message-container p {
  padding: 0 10% 0 5%;
  text-align: left;
  margin: 0 0 10px;
}
</style>
