import Vue from 'vue'
import App from './App.vue'


new Vue({
    el: '#app',
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
