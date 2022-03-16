export default {
  methods: {
    // 날짜의 다양한 형태..
    // 한국은 2022.03.15
    // 2022-03-15
    // 2022/03/15
    // 미국은 Mar 15, 2022
    // 유럽은 15.05.2022

    // d = Date 객체로 들어올수도 있고
    // 문자열로도 들어올 수 있다고 가정
    // d = '20220315', f = 'YYYY.MM.DD'
    $convertDateFormat(d, f) {
      let year = ''
      let month = ''
      let day = ''

      if (typeof d === 'string') {
        year = d.substr(0, 4)
        month = d.substr(4, 2)
        day = d.substr(6, 2)
      } else if (typeof d === 'object') {
        year = d.getFullYear()
        month = (d.getMonth() + 1).toString().padStart(2, 0)
        day = d.getDate().toString().padStart(2, 0)
      }

      return f.replace('YYYY', year).replace('MM', month).replace('DD', day)
    },

    // 금액에 대한 포맷
    // 3500
    // 3500.12
    // 한국 3,500
    // 미국 $3,500.00
    // 유럽 3.500,00 // 헐..
    // 3.500, #,### -> 3.500
    // 3.500.1 $#,###.00
    // #,###.#0
    // #.###,## -> 유럽스타일로
    // 1250.12, '#,###.##%' -> 1,250.12%
    $convertNumberFormat(amount, format) {
      let currencySymbol = '' // ex. $ 등
      let lastSymbol = '' // ex, % 로 끝나면 %를 저장

      if (format.substr(0, 1) !== '#') {
        // '#' 으로 시작하지 않는다면
        currencySymbol = format.substr(0, 1) // 심볼 저장
      }

      if (format.slice(-1) !== '#' && format.slice(-1) !== '0') {
        lastSymbol = format.slice(-1) // %
        format = format.slice(0, -1) // % 제외한 나머지 부분
      }

      let groupingSeparator = '' // 숫자 3자리마다 구분자 , 혹은 .
      let decimalSeparator = '' // 소수점 구분자 , 혹은 .
      let maxFractionDigits = 0 // 소수점 몇자리까지 표기할건지

      if (format.indexOf('.') === -1) {
        // .이 없다면
        // #,### <- 이러한 케이스
        groupingSeparator = ','
      } else if (format.indexOf(',') === -1) {
        // .은 있고 ,이 없다면
        // #.### <- 이러한 케이스
        groupingSeparator = '.'
      } else if (format.indexOf(',') < format.indexOf('.')) {
        // #,###.##
        groupingSeparator = ','
        decimalSeparator = '.'
        maxFractionDigits = format.length - format.indexOf('.') - 1
      } else {
        // #.###,##
        groupingSeparator = '.'
        decimalSeparator = ','
        maxFractionDigits = format.length - format.indexOf(',') - 1
      }

      let sign = '' // amount가 음수로 들어왔을 때
      let dec = 1
      for (let i = 0; i < maxFractionDigits; i++) {
        // dec = 10, i=1
        dec = dec * 10
        // dec = 100
      }
      // dec = 1000

      // amount = -3500 * 100 = 350000 / 100 = -3500.00
      // format = #,###.#0
      let v = String(Math.round(parseFloat(amount) * dec) / dec) // '-3500.00'

      if (v.startsWith('-')) {
        sign = '-'
        v = v.substring(1) // '3500.00'
      }

      if (maxFractionDigits > 0 && format.slice(-1) === '0') {
        v = parseFloat(v).toFixed(maxFractionDigits)
      }

      let d = '' // 소수점 이하 값만
      if (maxFractionDigits > 0 && v.indexOf('.') > -1) {
        d = v.substring(v.indexOf('.')) // .00
        d = d.replace('.', decimalSeparator) // .00 -> ,00
        v = v.substring(0, v.indexOf('.')) // 3500
      }

      const regexp = /(\d+)(\d{3})/
      // 마지막 세자리 숫자가 $2에 매핑되고
      // 제외한 나머지 앞부분이 $1에 매핑된다.

      // v = 3524500

      while (regexp.test(v)) {
        // $1 = 3524, $2 = 500
        // v = 3524,500

        // $1 = 3, $2 = 524
        // v = 3,524,500
        v = v.replace(regexp, '$1' + groupingSeparator + '$2')
      }

      return sign + currencySymbol + String(v) + String(d) + lastSymbol
    }
  }
}
