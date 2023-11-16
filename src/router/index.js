import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'root',
    path: '/',
    component: () => import(/* webpackChunkName: "main" */ "@/views/main/Index.vue"),
    meta: {layout: "DefaultLayout"}
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;
