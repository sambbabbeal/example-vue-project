import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstComponent from '@/components/FirstComponent'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'FirstComponent',
      component: FirstComponent
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
