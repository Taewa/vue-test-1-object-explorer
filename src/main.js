import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        c: 0,
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
    },
    mutations: {
        //https://narusas.github.io/2018/03/19/normalized-data-with-vuex.htmlhttps://narusas.github.io/2018/03/19/normalized-data-with-vuex.html
        moka (state) {
            // mutate state
            // state.obj.ha = 'wow';
            console.log('state!!!', state);
            state.c++;
            Vue.set(state.obj.super, 'other', 'wooooooow');
            Vue.delete(state.obj, 'stuff');

            // var a = Vue.get(state.obj.super);
            console.log('state.obj.super', state.obj.super);

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
