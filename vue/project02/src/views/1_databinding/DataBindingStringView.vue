<template>
  <div>
    <h1>Hello {{ userName }}</h1>
    <h1>Hello {{ userName2 }}</h1>
    <p>{{ userName }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: 'Seungwon Go',
      userName2: 'Jeremy'
    }
  }
}
</script>
<style scoped></style>
