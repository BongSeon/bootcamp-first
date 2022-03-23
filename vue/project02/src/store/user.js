import VueCookies from 'vue-cookies'

export const user = {
  namespaced: true,
  state() {
    return {
      userInfo: {
        // name: 'aestas kwak',
        // email: 'aestas@gmail.com',
        // tel: '000-0000-0000'
      }
    }
  },
  getters: {
    isLogin(state) {
      // if (state.userInfo.name) {
      //   return true
      // } else {
      //   return false
      // }
      if (VueCookies.get('userInfo')) {
        // 유저정보 세션 남아있는 상태
        return true
      } else {
        // 유저정보 세션 날라간 상태
        return false
      }
    }
  },
  mutations: {
    setUser(state, userInfo) {
      state.userInfo = userInfo
      VueCookies.set('userInfo', userInfo, '1MIN')
    },
    logout(state) {
      state.userInfo = {}
      VueCookies.remove('userInfo')
    }
  },
  actions: {}
}
