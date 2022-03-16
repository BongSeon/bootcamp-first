// 다국어 지원 관련
export default {
  install: (app, options) => {
    // split -- en.hi => ['en', 'hi']
    // reduce --
    // options가 시작값
    // 즉 o 는 처음에 전체값
    //  i에 'en'이 들어와서
    // reduce가 처음 놀면
    // o['en']
    // => { hi: 'Hello', search: 'Search', .. }
    // reduce가 한번 더 돌면
    // o['hi'] 로 접근

    app.config.globalProperties.$translate = (key, prams = {}) => {
      return key
        .split('.')
        .reduce((o, i) => {
          if (o) return o[i]
        }, options)
        .replace(/{\w+}/g, (match) => prams[match.slice(1, -1)])
      // 중괄호안에 하나이상의 단어를 찾은 후
      // ex. {name} 이라면 match에 {name}이 할당된다.
      // match.slice(1, -1) => 중괄호 제거 -- name
    }
  }
}
