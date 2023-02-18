export const state = () => ({
    cartitems: []
})

export const getters = {
    cartItems: (state) => state.cartitems
}
export const mutations = {
    setcartitems (state, payload) {
        state.cartitems = payload
    },
    removecartitem (state, payload) {
        state.cartitems = state.cartitems.filter(i => i.id !== payload.id)
        console.log(state.cartitems)
    }
}

export const actions = {
    setCartItems({ commit }, payload) {
        commit('setcartitems', payload)
    },
    removecartitem ({ commit }, payload) {
        commit('removecartitem', payload)
    }
}