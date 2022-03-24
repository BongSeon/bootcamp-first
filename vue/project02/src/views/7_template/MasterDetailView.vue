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
        <tr :key="customer.id" v-for="customer in customers">
          <td>
            <input
              type="radio"
              class="form-check-input"
              v-model="selectedId"
              :value="customer.id"
              @change="getCustomer"
            />
          </td>
          <td>
            <a>{{ customer.name }}</a>
          </td>
          <td>{{ customer.company }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.address }}</td>
        </tr>
      </tbody>
    </table>

    <!-- single edit -->
    <div v-show="selectedId !== ''" class="bg-light p-3">
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model.trim="customer.name"
            :disabled="!editMode"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Company</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model.trim="customer.company"
            :disabled="!editMode"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model.trim="customer.email"
            :disabled="!editMode"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Phone</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model.trim="customer.phone"
            :disabled="!editMode"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Address</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model.trim="customer.address"
            :disabled="!editMode"
          />
        </div>
      </div>
      <button
        v-show="!editMode"
        class="btn btn-secondary me-1"
        @click="editMode = true"
        :disabled="selectedId === ''"
      >
        수정
      </button>
      <button
        v-show="editMode"
        class="btn btn-secondary me-1"
        @click="editMode = false"
      >
        취소
      </button>
      <button class="btn btn-primary" @click="doSave" :disabled="!editMode">
        저장
      </button>
    </div>
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
      selectedId: '',
      customer: {},
      editMode: false
    }
  },
  created() {},
  mounted() {},
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

    async getCustomer() {
      this.editMode = false
      if (this.selectedId === '') {
        this.customer = {
          name: '',
          company: '',
          email: '',
          phone: '',
          address: ''
        }
      } else {
        const loader = this.$loading.show({ canCancel: false })
        this.customer = await this.$get(
          `http://localhost:3000/customers/${this.selectedId}`
        )
        loader.hide()
      }
    },
    async doSave() {
      if (this.customer.name === '') {
        return this.$swal('name을 입력하세요.')
      }
      if (this.customer.company === '') {
        return this.$swal('company를 입력하세요.')
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

          const r = await this.$put(
            `http://localhost:3000/customers/${this.customer.id}`,
            this.customer
          )

          // loading bar hide
          loader.hide()

          console.log(r)
          if (r.status === 200) {
            this.$swal('고객 정보가 저장되었습니다.')
            this.editMode = false
            this.selectedId = ''
            this.getCustomers()
          }
        }
      })
    }
  }
}
</script>
<style scoped></style>
