import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
    },
    mutations:{
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('https://damp-sierra-65910.herokuapp.com/products/', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);

                    return products;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },

    }
});

export default store;