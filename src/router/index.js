import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      component: () => import("@/views/index.vue"),
      children: ([
        {
          path: "",
          component: () => import("@/views/home/home.vue")
        },
        {
          path: "/home",
          component: () => import("@/views/home/home.vue")
        },
        {
          path: "/quote",
          component: () => import("@/views/quote/quote.vue"),
          children: ([
            {
              path: "",
              component: () => import("@/views/quote/component/usdt.vue")
            },
            {
              path: "/usdt",
              component: () => import("@/views/quote/component/usdt.vue")
            },
            {
              path: "/optional",
              component: () => import("@/views/quote/component/optional.vue")
            }
          ])
        },
        {
          path: "/contract",
          component: () => import("@/views/contract/contract.vue")
        },
        {
          path: "/mine",
          component: () => import("@/views/mine/mine.vue")
        }
      ])
    },
    {
      path: "/login",
      component: () => import("@/views/login/login.vue")
    },
    {
      path: "/verify",
      component: () => import("@/views/verify/verify.vue")
    },
    {
      path: "/order",
      component: () => import("@/views/order/order.vue")
    },
    {
      path: "/security",
      component: () => import("@/views/security/security.vue")
    },
    {
      path: "/setting",
      component: () => import("@/views/setting/setting.vue")
    },
    {
      path:"/position",
      component:()=>import("@/views/position/position.vue")
    }
  ]
})

export default router
