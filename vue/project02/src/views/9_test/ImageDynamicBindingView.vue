<template>
  <div>
    <div class="p-4">
      <img :src="getImgUrl('img/img-01.jpg')" alt="이미지1" />
      <img :src="getImgUrl('img/img-02.jpg')" alt="이미지2" />
      <img :src="getImgUrl('img/img-03.jpg')" alt="이미지3" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: '01', imgUrl: '@/assets/img/image-01.jpg' },
        { id: 2, name: '02', imgUrl: '@/assets/img/image-02.jpg' },
        { id: 3, name: '03', imgUrl: '@/assets/img/image-03.jpg' }
      ]
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('@/assets/' + pic)
    }
  }
}
</script>
