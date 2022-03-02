<template>
  <div>
    <!-- v-model ! 양방향 데이터 바인딩!  -->
    <input type="text" name="" id="" v-model="userId" />
    <button @click="myFunction">클릭</button>
    <button @click="changeData">변경</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'aestas'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    myFunction() {
      console.log(this.userId) // 함수에서 오브젝트에 접근할때 this 키워드를 사용해야한다!
    },
    changeData() {
      this.userId = 'reset'
    }
  }
}
</script>
