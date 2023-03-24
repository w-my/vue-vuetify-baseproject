import VueRouter from 'vue-router'
import Vuetify from '../components/pages/Vuetify'
import VuetifyUI from '../components/pages/VuetifyUI'
import VuetifyStyle from '../components/pages/VuetifyStyle'
import Dashboard from '../components/pages/Dashboard'
import Photos from '../components/pages/Photos'
import About from '../components/pages/About'

const router = new VueRouter({
  routes: [
    {
      path: '/vuetify',
      component: Vuetify,
      children: [
        {
          path: 'ui/:id/:title',
          component: VuetifyUI,
          meta: {title: 'VuetifyUI'}
        },
        {
          path: 'style',
          component: VuetifyStyle,
          meta: {isAuth: true, title: 'VuetifyStyle'}
        }
      ]
    },
    {
      path: '/dashboard',
      component: Dashboard,
      children: [
        {
          path: 'ui',
          component: VuetifyUI,
        },
        {
          path: 'style',
          component: VuetifyStyle,
        }
      ]
    },
    {
      path: '/photos',
      component: Photos
    },
    {
      path: '/about',
      component: About
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.isAuth &&  !(localStorage.getItem('admin') === 'root')) {
    console.log("==> ", to, from);
    console.log("==> error: 无权查看");
    alert('无权查看', to.meta.title);
    // next({ name: 'Login' });
    next('/vuetify');
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  console.log("==> ", to, from);
  document.title = to.meta.title || '系统'
})

export default router;