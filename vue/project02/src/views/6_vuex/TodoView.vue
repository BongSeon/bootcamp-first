<template>
  <div>TODO</div>
  <div>
    <div>{{ $store.state.todos }}</div>
    <button @click="addItem">추가</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    addItem() {
      this.$store.commit('add', { id: 4, title: 'todo 4', done: false })
    }
  }
}
</script>
