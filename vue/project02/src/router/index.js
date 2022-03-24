import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'loginview',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about", webpackPrefetch:true */ '../views/AboutView.vue'
      )
  },
  {
    path: '/hello',
    name: 'hello',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "hello"  */ '../views/HelloView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () =>
      import(
        /* webpackChunkName: "databinding"  */ '../views/1_databinding/DataBindingStringView.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingHtmlView.vue'
      )
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingInputView.vue'
      )
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingSelectView.vue'
      )
  },
  {
    path: '/databinding/checkbox',
    name: 'DataBindingCheckboxView.vue',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingCheckboxView.vue'
      )
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadioView.vue',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingRadioView.vue'
      )
  },
  {
    path: '/databinding/attribute',
    name: 'DataBindingAttributeView.vue',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingAttributeView.vue'
      )
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyleView.vue',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingStyleView.vue'
      )
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClassView.vue',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingClassView.vue'
      )
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView.vue',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingListView.vue'
      )
  },
  {
    path: '/event/click',
    name: 'EventClickView.vue',
    component: () =>
      import(
        /* webpackChunkName: "event" */ '../views/2_event/EventClickView.vue'
      )
  },
  {
    path: '/event/change',
    name: 'EventChangeView.vue',
    component: () =>
      import(
        /* webpackChunkName: "event" */ '../views/2_event/EventChangeView.vue'
      )
  },
  {
    path: '/event/key',
    name: 'EventKeyView.vue',
    component: () =>
      import(
        /* webpackChunkName: "event" */ '../views/2_event/EventKeyView.vue'
      )
  },
  {
    path: '/extra/if',
    name: 'RenderingIfView.vue',
    component: () =>
      import(
        /* webpackChunkName: "extra" */ '../views/3_extra/RenderingIfView.vue'
      )
  },
  {
    path: '/extra/show',
    name: 'RenderingShowView.vue',
    component: () =>
      import(
        /* webpackChunkName: "extra" */ '../views/3_extra/RenderingShowView.vue'
      )
  },
  {
    path: '/extra/computed',
    name: 'ComputedView.vue',
    component: () =>
      import(
        /* webpackChunkName: "extra" */ '../views/3_extra/ComputedView.vue'
      )
  },
  {
    path: '/extra/watch',
    name: 'WatchView.vue',
    component: () =>
      import(/* webpackChunkName: "extra" */ '../views/3_extra/WatchView.vue')
  },
  {
    path: '/reuse/page',
    name: 'PageView.vue',
    component: () =>
      import(/* webpackChunkName: "reuse" */ '../views/4_reuse/PageView.vue')
  },
  {
    path: '/reuse/list',
    name: 'ListView.vue',
    component: () =>
      import(/* webpackChunkName: "reuse" */ '../views/4_reuse/ListView.vue')
  },
  {
    path: '/reuse/slot',
    name: 'SlotView.vue',
    component: () =>
      import(/* webpackChunkName: "reuse" */ '../views/4_reuse/SlotView.vue')
  },
  {
    path: '/reuse/parent',
    name: 'ParentView.vue',
    component: () =>
      import(/* webpackChunkName: "reuse" */ '../views/4_reuse/ParentView.vue')
  },
  {
    path: '/advanced/provide',
    name: 'ProvideView.vue',
    component: () =>
      import(
        /* webpackChunkName: "advanced" */ '../views/5_advanced/ProvideView.vue'
      )
  },
  {
    path: '/advanced/directive',
    name: 'CustomDirectiveView.vue',
    component: () =>
      import(
        /* webpackChunkName: "advanced" */ '../views/5_advanced/CustomDirectiveView.vue'
      )
  },
  {
    path: '/advanced/mixin',
    name: 'MixinView.vue',
    component: () =>
      import(
        /* webpackChunkName: "advanced" */ '../views/5_advanced/MixinView.vue'
      )
  },
  {
    path: '/advanced/plugin',
    name: 'PluginView.vue',
    component: () =>
      import(
        /* webpackChunkName: "advanced" */ '../views/5_advanced/PluginView.vue'
      )
  },
  {
    path: '/vuex/todo',
    name: 'TodoView',
    component: () =>
      import(/* webpackChunkName: "vuex" */ '../views/6_vuex/TodoView.vue')
  },
  {
    path: '/template/listtodetail',
    name: 'ListToDetailView',
    component: () =>
      import(
        /* webpackChunkName: "template" */ '../views/7_template/ListToDetailView.vue'
      )
  },
  {
    path: '/template/detail',
    name: 'DetailView',
    component: () =>
      import(
        /* webpackChunkName: "template" */ '../views/7_template/DetailView.vue'
      )
  },
  ,
  {
    path: '/template/create',
    name: 'CreateView',
    component: () =>
      import(
        /* webpackChunkName: "template" */ '../views/7_template/CreateView.vue'
      )
  },
  {
    path: '/template/singleedit',
    name: 'SingleEditView',
    component: () =>
      import(
        /* webpackChunkName: "template" */ '../views/7_template/SingleEditView.vue'
      )
  },
  {
    path: '/template/multipleedit',
    name: 'MultipleEditView',
    component: () =>
      import(
        /* webpackChunkName: "template" */ '../views/7_template/MultipleEditView.vue'
      )
  },
  {
    path: '/template/masterdetail',
    name: 'MasterDetailView',
    component: () =>
      import(
        /* webpackChunkName: "template" */ '../views/7_template/MasterDetailView.vue'
      )
  },
  {
    path: '/template/shuttle',
    name: 'ShuttleView',
    component: () =>
      import(
        /* webpackChunkName: "template" */ '../views/7_template/ShuttleView.vue'
      )
  },
  {
    // 생성하는 페이지로 기능 합쳐서 구현할수도 있다
    path: '/template/change',
    name: 'ChangeView',
    component: () =>
      import(
        /* webpackChunkName: "template" */ '../views/7_template/ChangeView.vue'
      )
  },

  {
    path: '/test/animation/fade',
    name: 'AnimationFadeView.vue',
    component: () =>
      import(
        /* webpackChunkName: "test" */ '../views/9_test/AnimationFadeView.vue'
      )
  },
  {
    path: '/test/animation/bounce',
    name: 'AnimationBounceView.vue',
    component: () =>
      import(
        /* webpackChunkName: "test" */ '../views/9_test/AnimationBounceView.vue'
      )
  },
  {
    path: '/test/imgdynamic',
    name: 'ImageDynamicBindingView.vue',
    component: () =>
      import(
        /* webpackChunkName: "test" */ '../views/9_test/ImageDynamicBindingView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 3.16
// 라우터변경되기 바로 직전에 실행되는 부분
router.beforeEach((to, from, next) => {
  // console.log('from:', from) // 어디에서 이동했는지
  // console.log('to:', to) // 어디로 이동하는지

  if (to.path === '/') {
    next()
  } else if (to.path === '/login') {
    next()
  } else if (to.path === '/about') {
    if (store.getters['user/isLogin']) {
      next()
    } else {
      store.commit('/user/logout')
      next('/login')
    }
  } else {
    next()
  }
})

export default router
