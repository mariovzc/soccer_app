import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/components/MainView'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView
    },
    {
      path: '/register',
      name: 'Register',
      component: MainView
    },
    {
      path: '/login',
      name: 'Login',
      component: MainView
    },
    {
      path: '/leage/:id',
      name: 'MainView',
      component: MainView
    }
  ]
})
