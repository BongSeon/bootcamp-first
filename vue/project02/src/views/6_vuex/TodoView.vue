<template>
  <div>TODO</div>
  <div>
    <div>{{ todos }}</div>
    <div>전체 항목 수 : {{ todosCount }}</div>
    <button @click="addItem">추가(mutations)</button>
    <button @click="addItem2">추가(actions)</button>
  </div>
  <br />
  <div>USER</div>
  <div>
    <!-- <div>{{ $store.state.user.userInfo }}</div> -->
    <div v-if="userInfo.name">{{ userInfo.name }}님 환영합니다.</div>
    <button @click="login">로그인</button>
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
  computed: {
    todos() {
      // computed 의 특성이 변경사항이 감지되면 반영이 되는것이기 때문에
      // return this.$store.state.todos
      return this.$store.state.todo.todos
    },
    todosCount() {
      // return this.$store.getters.todosCount
      return this.$store.getters['todo/todosCount']
    },
    userInfo() {
      return this.$store.state.user.userInfo
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    addItem() {
      // mutations 에 정의된 함수 호출할때는 commit 을 사용
      // this.$store.commit('add', { id: 4, title: 'todo 4', done: false })
      this.$store.commit('todo/add', { id: 4, title: 'todo 4', done: false })
    },
    addItem2() {
      // actions 에 정의된 함수 호출할때는 dispatch 를 사용
      // this.$store.dispatch('add', { id: 4, title: 'todo 4', done: false })
      this.$store.dispatch('todo/add', { id: 4, title: 'todo 4', done: false })
    },
    login() {
      this.$store.commit('user/setUser', {
        name: 'aestas kwak',
        email: 'aestas@gmail.com',
        tel: '000-0000-0000'
      })
    }
  }
}
</script>
