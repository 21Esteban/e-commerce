import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../modules/shop/layouts/ShopLayout.vue'),
      children:[
        {
          path:"/",
          name:"home",
          component:()=>import('../modules/shop/views/HomeView.vue')
        }
      ]
    }
  ]
})

export default router
