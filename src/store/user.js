const state = {
    token: window.localStorage.getItem('token'),
}
const mutations = {
    SET_TOKEN: (state, data) => {
        state.token = data
        window.localStorage.setItem('token', data)
    },
    RESET_TOKEN_DATA: (state) => {
        state.token = ''
        window.localStorage.setItem('token', '')
    },
}
export default {
    namespaced: true,
    state,
    mutations
}