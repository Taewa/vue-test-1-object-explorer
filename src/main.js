import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        obj: {
            super: {
                prop: {
                    nested: 'reall'
                },
                other: 'hey'
            },
            stuff: 'yeah',
            ha: 'ho'
        }
    }
});

new Vue({
    el: '#app',
    store: store,
    render: h => h(App)
});




// new Vue({
//     el: '#item',
//
//     props: {
//         model: Object
//     },
//     data: function () {
//         return {
//             open: false,
//             isContainer: false
//         }
//     },
//     computed(){
//         isContainer: function () {
//             let res = this.model;
//             if (res.length > 0 && typeof res === 'object') {
//                 return true
//             }
//         }
//     ,
//     },
//     methods: {},
//     // render: h => h(App),
// });
