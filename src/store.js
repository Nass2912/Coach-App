import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            coaches: [
                {
                    id: 'c1',
                    firstName: 'max',
                    lastName: 'versta',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                        "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    firstName: 'Julie',
                    lastName: 'Jones',
                    areas: ['frontend', 'career'],
                    description:
                        'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                },
                {
                    id: 'c3',
                    firstName: 'Brown',
                    lastName: 'Jones',
                    areas: ['frontend', 'career'],
                    description:
                        'I am Brown Jones and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                },
                {
                    id: 'c4',
                    firstName: 'Brodie',
                    lastName: 'Gname',
                    areas: ['backend'],
                    description:
                        'I am Brodie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                }
            ]
        }
    },
    mutations: {

    },
    getters: {
        coaches(state) {
            return state.coaches;
        },

        hasCoaches(state) {
            return state.coaches && state.coaches.length > 0;
        }

    },
})

export default store