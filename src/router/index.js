import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import NotFound from '../views/NotFound.vue'
import ForgotPass from '../views/ForgotPass.vue'

const routes = [
	{ path: '/', name: 'Home', component: LandingPage },
	{ path: '/landing-page', name: 'LandingPage', component: LandingPage },
	{ path: '/login', name: 'Login', component: Login },
	{ path: '/register', name: 'Register', component: Register },
	{ path: '/not-found', name: 'NotFound', component: NotFound },
	{ path: '/forgot-pass', name: 'ForgotPass', component: ForgotPass },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.afterEach((to) => {
	const matchedRoute = routes.find(route => route.name === to.name)
	if (matchedRoute) {
		matchedRoute.name = (matchedRoute.name == 'Home' ? 'LandingPage' : matchedRoute.name)
		document.body.className = '' 
		document.body.classList.add(matchedRoute.name)
	} 
})
  
export default router