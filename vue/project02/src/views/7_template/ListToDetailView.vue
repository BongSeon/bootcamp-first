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
        <button @click="goToCreate" class="btn btn-success me-1">생성</button>
        <button @click="doExcel" class="btn btn-primary me-1">엑셀다운</button>
        <div class="btn-group">
          <button
            @click="showMethod = 'list'"
            class="btn btn-outline-secondary"
            :class="{ active: showMethod === 'list' }"
          >
            <i class="fas fa-list"></i>
          </button>
          <button
            @click="showMethod = 'card'"
            class="btn btn-outline-secondary"
            :class="{ active: showMethod === 'card' }"
          >
            <i class="fas fa-th-large"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- table view -->
    <table
      v-if="showMethod === 'list'"
      class="table table-striped table-bordered"
    >
      <thead>
        <tr>
          <th>name</th>
          <th>company</th>
          <th>email</th>
          <th>phone</th>
          <th>address</th>
        </tr>
      </thead>
      <tbody>
        <tr
          role="button"
          @click="goToDetail(customer.id)"
          :key="customer.id"
          v-for="customer in customers"
        >
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

    <!-- card view -->
    <div v-else-if="showMethod === 'card'" class="row">
      <div
        :key="customer.id"
        v-for="customer in customers"
        class="col-xl-3 col-lg-4 col-md-6 mb-2"
      >
        <div class="card">
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="180"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Image cap"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <!-- <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text> -->
          </svg>
          <div class="card-body">
            <h5 class="card-title">{{ customer.name }}</h5>
            <p class="card-text mb-1">
              <i class="fas fa-building"></i> {{ customer.company }}
            </p>
            <p class="card-text mb-1">
              <i class="fas fa-envelope"></i> {{ customer.email }}
            </p>
            <p class="card-text">
              <i class="fas fa-phone-square"></i> {{ customer.phone }}
            </p>
            <a @click="goToDetail(customer.id)" class="btn btn-primary"
              >Detail</a
            >
          </div>
        </div>
      </div>
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
      fromDetail: false,
      showMethod: 'list' // card
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
    goToDetail(id) {
      // GET 방식 !!
      // 쿼리가 url에 붙는다
      this.$router.push({
        path: '/template/detail',
        query: { id: id, searchName: this.searchName }
      })

      // 라우터의 name을 이용
      // query가 아닌 params로 전달
      //  포스트 방식 !!
      // this.$router.push({ name: 'DetailView', params: { id: id } })
    },
    goToCreate() {
      this.$router.push({
        path: '/template/create'
      })
    },
    doExcel() {
      // this.$refs.smGrid.doExcel()
      this.$ExcelFromTable(this.headers, this.customers, 'customers')
    }
  }
}
</script>
<style scoped></style>
