<template>
  <div>extra/computed</div>
  <!-- <h2>welcom, {{ title }} {{ firstName }} {{ lastName }}</h2> -->
  <h2>{{ fullName }}</h2>
  <br />

  <div>
    <input type="number" name="" id="" v-model="num1" />
    <input type="number" name="" id="" v-model="num2" /> =
    <span>{{ sum }}</span>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      firstName: 'Aestas',
      lastName: 'Kwak',
      middleName: '',
      title: 'Mr.',
      num1: 2,
      num2: 4500
    }
  },
  computed: {
    fullName() {
      return this.title + ' ' + this.firstName + ' ' + this.lastName
    },
    sum() {
      return this.num1 * this.num2
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
