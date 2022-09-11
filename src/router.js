import { createRouter, createWebHistory } from "vue-router";
import coachesPage from './pages/CoachesPage.vue'
import SingleCoach from './pages/SingleCoach.vue'
import SingleCoachContact from './pages/SingleCoachContact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: coachesPage },
        {
            path: '/coaches/:id', component: SingleCoach, children: [
                { path: '/contact', component: SingleCoachContact }
            ]
        },
        { path: '/register', component: null },
        { path: '/requests', component: null },
        { path: '/:notFound(.*)', component: null },
    ]
})

export default router