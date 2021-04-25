import Vue from 'vue'
import Router from 'vue-router'
import Diary1 from '@/components/Diary1'
import Diary2 from '@/components/Diary2'
import Diary3 from '@/components/Diary3'
import Diary4 from '@/components/Diary4'
import visible from '@/components/visible'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/diary1',
      name: 'Diary1',
      component: Diary1
    },
    {
      path: '/diary2',
      name: 'Diary2',
      component: Diary2
    },
    {
      path: '/diary3',
      name: 'Diary3',
      component: Diary3
    },
    {
      path: '/diary4',
      name: 'Diary4',
      component: Diary4
    },
    {
      path: '/visible',
      name: 'visible',
      component: visible
    }
  ]
})
