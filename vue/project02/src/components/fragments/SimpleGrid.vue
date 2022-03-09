<template>
  <div>
    <div v-if="enableExcelDownload" class="text-end">
      <button class="btn btn-secondary">엑셀다운로드</button>
    </div>
    <table class="table table-bordered">
      <!-- header의 개수만큼 th를 반복 -->
      <thead>
        <tr>
          <th v-if="selectType === 'radio' || selectType === 'checkbox'"></th>
          <th v-for="th in headers" :key="th.key">{{ th.title }}</th>
        </tr>
      </thead>
      <!-- header의 개수만큼 td를 반복 -->
      <!-- tr은 item개수만큼 돌리고 그안에 td는 header개수만큼 돌리게끔 -->
      <tbody>
        <tr v-for="(item, i) in items" :key="i">
          <td v-if="selectType === 'radio'">
            <input
              type="radio"
              name=""
              id=""
              :value="item[checkedKey]"
              v-model="checkedItem"
              @change="doSelect"
            />
          </td>
          <td v-if="selectType === 'checkbox'">
            <input
              type="checkbox"
              name=""
              id=""
              :value="item[checkedKey]"
              v-model="checkedItems"
              @change="doSelect"
            />
          </td>
          <td :key="th.key" v-for="th in headers">
            {{ item[th.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    headers: {
      type: Array,
      default: function () {
        return []
      }
    },
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    selectType: {
      type: String,
      default: ''
    },
    checkedKey: {
      type: String,
      default: ''
    },
    changeEventName: {
      type: String,
      default: 'change-item'
    },
    enableExcelDownload: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checkedItem: '',
      checkedItems: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSelect() {
      if (this.selectType === 'radio') {
        // console.log(this.checkedItem)
        this.$emit(this.changeEventName, this.checkedItem)
      } else if (this.selectType === 'checkbox') {
        // console.log(this.checkedItems)
        this.$emit(this.changeEventName, this.checkedItems)
      }
    },
    doPrint() {
      console.log('doPrint 함수 호출')
    },
    doExcel() {
      console.log('doExcel 함수 호출')
    }
  }
}
</script>
