import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-view',
    component: Dashboard
  },
  // в реальном времени
  {
		path: "/report_categories/:id",
		name: "ReportCategories",
    component: () => import('@/views/Reports/ReportCategoriesDetails.vue')
	},
    // организация
  {
		path: "/organization",
		name: "Organization",
		component: () => import('@/views/Organization/Main.vue'),
	},
  // 
  {
		path: "/reports",
		name: "ReportsList",
		component: () => import('@/views/Reports/ReportList.vue'),
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
