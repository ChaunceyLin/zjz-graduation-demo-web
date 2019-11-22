import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;


function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    }
}
export default new Vuex.Store({
    state: {
        successRequestData: []
    },
    mutations: {
        setsuccessRequestData(state) {
            for (var i = 0; i < 5; i++) {
                state.successRequestData.push(randomData());
            }

        }
    },
    actions: {
        setsuccessRequestDataAsync({ commit }) {
            commit('setsuccessRequestData');
        }
    },
    modules: {}
})