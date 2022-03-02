<template>
  <div>
    <!-- 단방향 바인딩하고 싶을때  -->
    <input type="text" name="" id="" v-bind:value="userId" readonly />
    <input type="text" name="" id="" :value="userId" readonly />
    <br />
    <img src="@/assets/logo.png" alt="" style="width: 100px; height: auto" />@는
    src를 의미
    <br />
    <img :src="imgSrc" alt="" style="width: 100px; height: auto" />
    <br />
    검색값이 있을때만 조회버튼 활성화 시키고 싶다면?
    <input type="search" name="" id="" v-model="txt1" />
    <button :disabled="txt1 === ''">조회</button>

    <br />
    동의할때만 보내기 활성화? value값은 꼭 있어야한다.
    <input
      type="checkbox"
      name=""
      id=""
      value="1"
      v-model="agreeEmail"
      @change="
        style1.display === 'none'
          ? (style1.display = block)
          : (style1.display = none)
      "
    />
    <label for="">이메일보내기동의</label>
    <br />
    <input type="email" name="" id="" v-show="agreeEmail.length" />
    <input type="email" name="" id="" :style="style1" />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'aestas',
      txt1: '',
      agreeEmail: [],
      style1: { display: 'none' },
      imgSrc:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
