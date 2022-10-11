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
                },               {
                    id: 'c5',
                    firstName: 'Brodie',
                    lastName: 'Gname',
                    areas: ['backend'],
                    description:
                        'I am Brodie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                },               {
                    id: 'c6',
                    firstName: 'Brodie',
                    lastName: 'Gname',
                    areas: ['backend'],
                    description:
                        'I am Brodie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                }
            ],
            requests: []
        }
    },
    mutations: {
        AddToCoaches(state, payload) {
            state.coaches.push(payload);
        },
        ContactCoach(state, payload) {
            state.requests.push(payload);
        }

    },
    actions: {
        RegisterCoach(context, payload) {
            let formData = {
                id: 'c5',
                firstName: payload.fname,
                lastName: payload.lname,
                areas: payload.areas,
                description: payload.desc,
                hourlyRate: payload.rate
            }
            context.commit('AddToCoaches', formData)
        },
        ContactCoach(context, payload) {
            let data = {
                email: payload.email,
                message: payload.message,
                coachId: payload.coachId,
                id: payload.id,
            }
            context.commit("ContactCoach", data)
        }
    },

    getters: {
        coaches(state) {
            return state.coaches;
        },

        hasCoaches(state) {
            return state.coaches && state.coaches.length > 0;
        },

        fetchRequests(state, getters) {
            let coachArray = []
            getters.coaches.forEach((coach) => {
                coachArray.push(coach.id)
            })
            return state.requests.filter((request) => {
                return coachArray.includes(request.id);
            })
        },
        checker(state) {
            return state.requests && state.requests.length > 0
        }

    },
})

export default store