<template>
  <div>Animation bounce</div>
  <button @click="visible = !visible">toggle</button>
  <transition name="bounce">
    <p v-if="visible">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis
      autem dicta dolor beatae, alias tenetur earum laborum a aspernatur eum.
    </p>
  </transition>
  <div>
    <button @click="textId++ < 4 ? textId : (textId = 1)">toggle2</button>

    <transition name="bounce" mode="out-in">
      <p v-if="textId == 1">First Text</p>
      <p v-else-if="textId == 2">Second Text</p>
      <p v-else-if="textId == 3">Third Text</p>
      <p v-else>Fourth Text</p>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      textId: 1
    }
  }
}
</script>
<style scoped>
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  60% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
</style>
