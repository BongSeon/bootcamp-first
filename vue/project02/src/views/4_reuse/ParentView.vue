<template>
  <div>
    <button @click="changeNum">변경</button>
    <child
      :str="sampleData"
      :num="num"
      :isOk="true"
      :arr="list"
      :obj="pObj"
      ref="child1"
      @change-data="getData"
    />
  </div>
</template>
<script>
import Child from '@/components/fragments/Child.vue'
export default {
  components: { Child },
  data() {
    return {
      sampleData: 'hello',
      list: [1, 2, 3],
      num: 123,
      pObj: { name: 'kwak' }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeNum() {
      this.num = 35
      this.$refs.child1.str2 = 'seoul'
      this.$refs.child1.doPrint('printttt')
    },
    getData(data) {
      console.log('getdata: ', data)
    }
  }
}
</script>
