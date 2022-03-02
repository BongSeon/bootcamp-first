<template>
  <h2>class</h2>
  <h4>배열과 오브젝트형 2가지방식으로 바인딩할 수 있다.</h4>
  <div :class="class1">클래스 바인딩 (배열로 바인딩)</div>
  <br />
  <!-- active처럼 두단어이상이 아닐때는 ''생략가능 -->
  <div :class="{ active: isActive, 'text-orange': hasError }">
    클래스 바인딩2 (오브젝트형으로 바인딩)
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      class1: ['active', 'text-orange'],
      isActive: true,
      hasError: true
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
.active {
  background-color: cadetblue;
  font-weight: bold;
  font-size: 30px;
}
.text-orange {
  color: orange;
}
</style>
