import {defineStore} from 'pinia'

export const useUserStore = defineStore('user', {
    state() {
        const role: Array<string> = []
        return {
            userInfo: {
                id: '',
                name: '',
                avatar: '',
                role
            },
        }
    },
    getters: {
        userId(user) {
            return user.userInfo.id
        },
        name(user) {
            return user.userInfo.name
        },
        avatar(user) {
            return user.userInfo.avatar
        },
        role(user) {
            return user.userInfo.role || []
        },
    },
    actions: {
        async getUserInfo() {
            this.userInfo = {
                id: '1',
                name: 'Antonio',
                avatar: '',
                role: ['admin']
            }
        },
        logout() {
            this.userInfo = {
                id: '',
                name: '',
                avatar: '',
                role: []
            }
        },
        // setUserInfo(userInfo = {}) {
        //     this.userInfo = {...this.userInfo, ...userInfo}
        // },
    },
})
