import Vue from 'vue'
import Router from 'vue-router'
import Cart from "./views/Cart";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Cart
        }

    ]

})