<template>
  <div>
    <h2>provide / inject</h2>
    <inject />
  </div>
</template>
<script>
import Inject from '@/components/fragments/Inject.vue'
export default {
  components: { Inject },
  data() {
    return {
      sampleData: ''
    }
  },
  provide() {
    return {
      size: 5,
      str: 'AAA'
    }
  },
  methods: {}
}
</script>
