<template>
  <div>DataBindingList</div>
  <div>
    <select name="" id="">
      <option v-for="city in cities" :key="city.code" :value="city.title">
        {{ city.title }}
      </option>
    </select>
  </div>
  <h4>table with drinklist</h4>
  <div>
    <br />
    <br />
    <br />
    <button @click="doSearch">서버에서 데이터 조회</button>
    이렇게 key에 인덱스를 사용할 수 도 있다
    <table>
      <thead>
        <tr>
          <th>제품번호</th>
          <th>제품이름</th>
          <th>가격</th>
          <th>주문수량</th>
          <th>합계</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(drink, i) in drinkList">
          <td>{{ drink.drinkId }} 배열인덱스:{{ i }}</td>
          <td>{{ drink.drinkName }}</td>
          <td>{{ drink.price }}</td>
          <td><input type="number" v-model="drink.qty" /></td>
          <td>{{ drink.price * drink.qty }}</td>
        </tr>
      </tbody>
    </table>
    <br />
    <br />
    <br />

    <button @click="doSearch2">서버에서 데이터 조회2</button>

    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>company</th>
          <th>gender</th>
          <th>email</th>
          <th>phone</th>
          <th>addres</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="customer.id" v-for="customer in customerList">
          <td>{{ customer.name }}</td>
          <td>{{ customer.company }}</td>
          <td>{{ customer.gender }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cities: [
        { title: '서울', code: '02' },
        { title: '부산', code: '051' },
        { title: '제주', code: '052' }
      ],
      drinkList: [
        {
          drinkId: '1',
          drinkName: '코카콜라',
          price: 700,
          qty: 1
        },
        {
          drinkId: '2',
          drinkName: '오렌지주스',
          price: 1200,
          qty: 1
        },
        {
          drinkId: '3',
          drinkName: '커피',
          price: 500,
          qty: 1
        },
        {
          drinkId: '4',
          drinkName: '물',
          price: 700,
          qty: 1
        },
        {
          drinkId: '5',
          drinkName: '보리차',
          price: 1200,
          qty: 1
        },
        {
          drinkId: '6',
          drinkName: '포카리',
          price: 1000,
          qty: 1
        },
        {
          drinkId: '7',
          drinkName: '뽀로로',
          price: 1300,
          qty: 1
        }
      ],
      customerList: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      this.drinkList = []
    },
    async doSearch2() {
      const resource = 'http://localhost:3000/customers'

      const res = await fetch(resource)
      const resJson = await res.json()
      console.log(resJson)
      this.customerList = resJson
    }
  }
}
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
tr,
th,
td {
  border: 1px solid darkgray;
  border-collapse: collapse;
}
</style>
