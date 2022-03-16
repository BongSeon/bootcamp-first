<template>
  <div>
    <p>{{ str }}</p>
    <p>{{ num }}</p>
    <p>{{ isOk }}</p>
    <p>{{ arr }}</p>
    <p>{{ obj }}</p>
    <p>자식컴포넌트의 데이터: {{ str2 }}</p>
    <button @click="callParent">부모로 데이터 전달</button>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    str: {
      type: String,
      defalut: ''
    },
    num: {
      type: Number,
      defalut: 0
    },
    isOk: {
      type: Boolean,
      defalut: false
    },
    arr: {
      type: Array,
      defalut: function () {
        return [1]
      }
    },
    obj: {
      type: Object,
      defalut: function () {
        return {}
      }
    }
  },
  data() {
    return {
      str2: 'jeju'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doPrint(print) {
      console.log(print)
    },
    callParent() {
      this.$emit('change-data', this.str2)
    }
  }
}
</script>
