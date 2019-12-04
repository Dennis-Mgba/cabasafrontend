import vue from 'vue'
import Router from 'vue-router'


import Cabasa from './views/Cabasa'
import SignUp from './views/SignUp.vue'
import Login from './views/Login.vue'


vue.use(Router)


const router = new Router({

    // mode: 'history',

    routes: [
        {
            path: "/",
            component: Cabasa
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/signup",
            component: SignUp
        }
    ]
});

export default router;


// export default new Router({
//     mode: "history",
//     base: process.env.BASE_URL,
//     routes: [
//         {
//             path: "/",
//             name: "cabasa",
//             component: () => import("./views/Cabasa")
//         },
//         {
//             path: "/login",
//             name: "signIn",
//             component: () => import("./views/Login.vue")
//         },
//         {
//             path: "/signup",
//             name: "cabasa",
//             component: () => import("./views/SignUp.vue")
//         }
//     ]
// });
