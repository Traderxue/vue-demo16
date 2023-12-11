import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"",
      component:()=>import("@/views/index.vue"),
      children:([
        {
          path:"",
          component:()=>import("@/views/home/home.vue")
        },
        {
          path:"/home",
          component:()=>import("@/views/home/home.vue")
        },
        {
          path:"/quote",
          component:()=>import("@/views/quote/quote.vue"),
          children:([
            {
              path:"",
              component:()=>import("@/views/quote/component/usdt.vue")
            },
            {
              path:"/usdt",
              component:()=>import("@/views/quote/component/usdt.vue")
            },
            {
              path:"/optional",
              component:()=>import("@/views/quote/component/optional.vue")
            }
          ])
        },
        {
          path:"/contract",
          component:()=>import("@/views/contract/contract.vue")
        },
        {
          path:"/mine",
          component:()=>import("@/views/mine/mine.vue")
        }
      ])
    },
    {
      path:"/login",
      component:()=>import("@/views/login/login.vue")
    }

  ]
})

export default router
