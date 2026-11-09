import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

// Hash history so routes keep working on reload in GitHub Pages
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: () => import('./views/AboutView.vue') },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
