<template>
  <div>Animation fade</div>
  <button @click="visible = !visible">toggle</button>
  <transition name="fade">
    <p v-if="visible">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis
      autem dicta dolor beatae, alias tenetur earum laborum a aspernatur eum.
    </p>
  </transition>
</template>
<script>
// import { ref } from 'vue'
export default {
  data() {
    return {
      visible: false
    }
  },
  // setup() {
  //   const visible = ref(false)

  //   return { visible }
  // },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}
</style>
