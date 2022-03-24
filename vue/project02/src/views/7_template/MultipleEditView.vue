<template>
  <div class="container">
    <!-- 조회조건 -->
    <div class="row row-cols-lg-auto g-3 align-items-center mb-2">
      <div class="col-12">
        <input
          @keyup.enter="getCustomers"
          v-model.trim="searchName"
          type="search"
          class="form-control"
          placeholder="name"
        />
      </div>
      <div class="col-12">
        <button @click="getCustomers" class="btn btn-primary me-1">조회</button>
        <button @click="doSave" class="btn btn-success me-1">저장</button>
        <button @click="doDelete" class="btn btn-danger me-1">삭제</button>
      </div>
    </div>

    <!-- table view -->
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th></th>
          <th>name</th>
          <th>company</th>
          <th>email</th>
          <th>phone</th>
          <th>address</th>
        </tr>
      </thead>
      <tbody>
        <tr role="button" :key="customer.id" v-for="customer in customers">
          <td>
            <input
              type="checkbox"
              class="form-check-input"
              :value="customer.id"
              v-model="selectedCustomers"
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              v-model="customer.name"
              :disabled="
                selectedCustomers.filter(
                  (selectedId) => selectedId === customer.id
                ).length === 0
              "
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              v-model="customer.company"
              :disabled="
                selectedCustomers.filter(
                  (selectedId) => selectedId === customer.id
                ).length === 0
              "
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              v-model="customer.email"
              :disabled="
                selectedCustomers.filter(
                  (selectedId) => selectedId === customer.id
                ).length === 0
              "
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              v-model="customer.phone"
              :disabled="
                selectedCustomers.filter(
                  (selectedId) => selectedId === customer.id
                ).length === 0
              "
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              v-model="customer.address"
              :disabled="
                selectedCustomers.filter(
                  (selectedId) => selectedId === customer.id
                ).length === 0
              "
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        { title: 'Name', key: 'name' },
        { title: 'Company', key: 'company' },
        { title: 'Email', key: 'email' },
        { title: 'Phone', key: 'phone' },
        { title: 'Address', key: 'address' }
      ],
      customers: [],
      searchName: '',
      selectedCustomers: []
    }
  },
  created() {
    // detail 페이지에서 왔는지 확인
    if (this.$route.params.fromDetail) {
      this.fromDetail = this.$route.params.fromDetail
      this.searchName = this.$route.params.searchName
    }
  },
  mounted() {
    if (this.fromDetail) {
      this.getCustomers()
    }
  },
  methods: {
    async getCustomers() {
      // 로딩 바 띄우기 loading bar
      const loader = this.$loading.show({ canCancel: false })

      // 고객 정보 조회
      this.customers = await this.$get(
        `http://localhost:3000/customers?name_like=${this.searchName}`
      )

      loader.hide()
    },
    async doSave() {
      const selectedCustomerData = []
      this.selectedCustomers.forEach((id) => {
        selectedCustomerData.push(
          this.customers.filter((customer) => customer.id === id)[0]
        )
      })

      // 빈값인지 체크
      let isEmptyFeild = false
      selectedCustomerData.forEach((customer) => {
        if (
          customer.name === '' ||
          customer.company === '' ||
          customer.email === '' ||
          customer.phone === '' ||
          customer.address === ''
        ) {
          isEmptyFeild = true
        }
      })
      if (isEmptyFeild) {
        return this.$swal('입력되지 않은 필드가 있습니다.')
      }

      this.$swal({
        title: '고객 정보를 저장하시겠습니까?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '취소',
        confirmButtonText: '저장'
      }).then(async (result) => {
        if (result.isConfirmed) {
          // 로딩 바 띄우기 loading bar
          const loader = this.$loading.show({ canCancel: false })

          selectedCustomerData.forEach(async (customer) => {
            await this.$put(
              `http://localhost:3000/customers/${customer.id}`,
              customer
            )
          })

          // loading bar hide
          loader.hide()

          this.$swal('고객정보가 정상적으로 수정되었습니다.')

          // 체크박스 클리어
          this.selectedCustomers = []

          // 다시 목록 조회
          this.getCustomers()
        }
      })
    },
    async doDelete() {
      this.$swal({
        title: '정말 삭제 하시겠습니까?',
        text: '삭제된 데이터는 복원되지 않습니다.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '취소',
        confirmButtonText: '삭제'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const loader = this.$loading.show({ canCancel: false })

          this.selectedCustomers.forEach(async (id) => {
            await this.$delete(`http://localhost:3000/customers/${id}`)
          })

          loader.hide()
          this.$swal('고객 정보가 정상적으로 삭제되었습니다.')
          this.selectedCustomers = []
          this.getCustomers()
        }
      })
    }
  }
}
</script>
<style scoped></style>
