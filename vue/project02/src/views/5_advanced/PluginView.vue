<template>
  <div>PluginView 플러그인을 활용한 다국어처리</div>
  <h3>{{ $translate('en.hi') }}</h3>
  <h3>{{ $translate('ko.hi') }}</h3>
  <button>{{ $translate(`${lang}.search`) }}</button>
  <h3>{{ $translate(`${lang}.welcome`, userInfo) }}</h3>
</template>
<script>
export default {
  data() {
    return {
      lang: 'ko',
      name: 'Aestas Kwak',
      userInfo: {
        name: 'Aestas Kwak',
        email: 'hawhawba@gmail.com',
        lang: 'en'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
