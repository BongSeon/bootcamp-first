<template>
  <h3>
    {{ title }} <small>({{ title2 }})</small>
  </h3>
  <p>{{ list }}</p>
</template>
<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: '페이지 제목 기본값'
    },
    title2: {
      type: String,
      default: ''
    },
    num: {
      type: Number,
      default: 0
    },
    isBoolean: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {}
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
