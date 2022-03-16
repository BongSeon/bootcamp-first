<template>
  <div>
    <h2>Custom Directive</h2>
    v-focus
    <div><input type="text" name="" id="" v-focus /></div>
    v-number 숫자만 입력
    <div><input type="text" name="" id="" v-number /></div>
    v-lowercase 소문자만 입력
    <div><input type="text" name="" id="" v-lowercase /></div>
    v-uppercase 대문자만 입력
    <div><input type="text" name="" id="" v-uppercase /></div>
    v-korean 한글만 입력
    <div><input type="text" name="" id="" v-korean /></div>
  </div>
</template>
<script>
import { eventListeners } from '@popperjs/core'
export default {
  components: {},
  directives: {
    // main.js 에 등록해서 이부분 없어도 작동한다.
    // focus: {
    //   mounted(el) {
    //     el.focus()
    //   }
    // },
    // number: {
    //   mounted(el) {
    //     el.addEventListener('input', () => {
    //       console.log(event.target.value)
    //       event.target.value = event.target.value.replace(/[^0-9]/g, '')
    //     })
    //   }
    // },
    // lowercase: {
    //   mounted(el) {
    //     el.addEventListener('input', () => {
    //       console.log(event.target.value)
    //       event.target.value = event.target.value.replace(/[^a-z]/g, '')
    //     })
    //   }
    // },
    // uppercase: {
    //   mounted(el) {
    //     el.addEventListener('input', () => {
    //       console.log(event.target.value)
    //       event.target.value = event.target.value.replace(/[^A-Z]/g, '')
    //     })
    //   }
    // },
    // korean: {
    //   mounted(el) {
    //     el.addEventListener('input', () => {
    //       console.log(event.target.value)
    //       event.target.value = event.target.value.replace(
    //         /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,
    //         ''
    //       )
    //     })
    //   }
    // }
    // 이하.. 옛날 방법
    // number: {
    //   mounted(el) {
    //     el.addEventListener('keydown', () => {
    //       console.log(event.key, event.keyCode)
    //       if (
    //         // 48~57 숫자
    //         // 57 backspace
    //         // 37 39 방향키
    //         // 46 del 키
    //         // 13 enter
    //         // 9 tab
    //         !(
    //           (event.keyCode >= 48 && event.keyCode <= 57) ||
    //           event.keyCode == 8 ||
    //           event.keyCode == 37 ||
    //           event.keyCode == 39 ||
    //           event.keyCode == 46 ||
    //           event.keyCode == 13 ||
    //           event.keyCode == 9
    //         )
    //       ) {
    //         event.preventDefault()
    //       }
    //     })
    //     // 한글(로컬언어)인경우 event prevent default가 안먹는 치명적인 문제가 있기 때문에
    //     // 이를 보완하기위해 정규식을 이용해서 keyup이벤트를 활용해서 숫자가아닌 모든것을 삭제시켜줌
    //     el.addEventListener('keyup', () => {
    //       event.target.value = event.target.value.replace(/[^0-9]/g, '')
    //     })
    //   }
    // }
  },
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
