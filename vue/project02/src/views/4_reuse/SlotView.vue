<template>
  <div>
    <button
      class="btn btn-primary"
      @click="handleClick"
      data-bs-toggle="modal"
      data-bs-target="#xxx"
    >
      show Modal
    </button>
    <slot-modal modalId="xxx">
      <template v-slot:title> 모달창 타이틀</template>
      <template v-slot:body>
        <p>first</p>
        <p>second</p>
      </template>
      <template v-slot:footer>
        <button class="btn btn-primary">저장</button>
      </template>
    </slot-modal>
  </div>
</template>

<script>
import SlotModal from '@/components/fragments/SlotModal.vue'
export default {
  components: { 'slot-modal': SlotModal },
  data() {
    return {
      bShow: 'false'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    handleClick() {}
  }
}
</script>
