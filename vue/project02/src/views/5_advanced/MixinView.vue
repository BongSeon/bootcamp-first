<template>
  <div>MixinView</div>
  <div>날짜 변환 20220314 -> 'YYYY-MM-DD'</div>
  <div>{{ $convertDateFormat('20220314', 'YYYY-MM-DD') }}</div>
  <div>날짜 변환 new Date() -> 'MM.DD.YYYY'</div>
  <div>{{ $convertDateFormat(new Date(), 'MM.DD.YYYY') }}</div>
</template>

<script>
import Formatter from '@/mixins/formatter.js'
// import Axios from '@/mixins/axios.js' // 전역으로 뺌

export default {
  mixins: [Formatter],
  // mixins: [Axios],
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {
    console.log('components에서 출력')

    //$convertDateFormat test
    console.log(this.$convertDateFormat('20220314', 'YYYY-MM-DD'))
    console.log(this.$convertDateFormat(new Date(), 'YYYY.MM.DD'))

    // $convertNumberFormat test
    console.log(this.$convertNumberFormat(3500, '#,###'))
    console.log(this.$convertNumberFormat(235643500, '#,###'))
    console.log(this.$convertNumberFormat(5425.1, '#,###.##'))
    console.log(this.$convertNumberFormat(5425.1, '#,###.#0'))
    console.log(this.$convertNumberFormat(5425.1, '#.###,#0'))
    console.log(this.$convertNumberFormat(5425.1, '$#,###.#0'))
    console.log(this.$convertNumberFormat(-5425.1, '$#,###.#0'))

    // json-server 실행해야 동작함
    this.getCustomers()
  },
  unmounted() {},
  methods: {
    async getCustomers() {
      // json-server 실행해야 동작함
      const customers = await this.$get('http://localhost:3000/customers')
      console.log(customers)
    }
  }
}
</script>
