<template>
  <h2>style</h2>
  <div style="color: red; font-size: 30px">
    style바인딩 글씨는red,폰트크기:30px
  </div>
  <div :style="style1">style바인딩 글씨는 red,폰트크기:30px</div>
  <div :style="style2">style바인딩 글씨는 darkgrey,폰트크기:25px</div>
  <button @click="style2.color = 'blue'">색상바꾸기</button>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      style1: 'color: red; font-size: 30px',
      //스타일은 위처럼 문자열로 하지말고
      // 오브젝트로 바인딩하는것이 좋다
      //camelCase
      style2: {
        color: 'darkgrey',
        fontSize: '25px'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
