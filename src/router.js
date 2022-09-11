import { createRouter, createWebHistory } from "vue-router";
import coachesPage from './pages/CoachesPage.vue'
import SingleCoach from './pages/SingleCoach.vue'
import SingleCoachContact from './pages/SingleCoachContact.vue'
import RegisterPage from './pages/RegisterPage.vue'
import RequestPage from './pages/RequestPage.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: coachesPage },
        {
            path: '/coaches/:id', component: SingleCoach, children: [
                { path: 'contact', component: SingleCoachContact }
            ]
        },
        { path: '/register', component: RegisterPage },
        { path: '/requests', component: RequestPage },
        { path: '/:notFound(.*)', component: NotFound },
    ]
})

export default router