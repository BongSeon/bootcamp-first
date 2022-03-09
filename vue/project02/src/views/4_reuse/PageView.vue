<template>
  <div>reuse/page</div>
  <page-title title="고객조회" :title2="title2" />
  <page-title title="리스트" title2="리스트title2" :list="list" />
</template>
<script>
import PageTitle from '@/components/fragments/PageTitle.vue'
export default {
  components: { 'page-title': PageTitle },
  data() {
    return {
      title2: '고객리스트를 조회하는 화면',
      list: [1, 2, 3, 4]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
